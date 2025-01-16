import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  // Verify cron secret
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    // Get all users
    const users = await prisma.user.findMany();

    if (!users.length) {
      return NextResponse.json({ message: "No users found" }, { status: 404 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Process each user's tasks
    const results = await Promise.all(
      users.map(async (user) => {
        // Get user's tasks
        const tasks = await prisma.task.findMany({
          where: { userId: user.id },
        });

        // Calculate completion percentage
        const completedTasks = tasks.filter((task) => task.isComplete).length;
        const totalTasks = tasks.length;
        const completionPercentage =
          totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

        // Save completion percentage
        await prisma.dailyCompletion.upsert({
          where: {
            userId_date: {
              userId: user.id,
              date: today,
            },
          },
          update: {
            completionPercentage,
          },
          create: {
            userId: user.id,
            date: today,
            completionPercentage,
          },
        });

        // Handle task recycling
        const [tasksToDelete, tasksToUpdate] = tasks.reduce(
          ([toDelete, toUpdate], task) => {
            if (!task.isPersistent && task.isComplete) {
              return [[...toDelete, task.id], toUpdate];
            }
            return [toDelete, [...toUpdate, task.id]];
          },
          [[] as string[], [] as string[]]
        );

        // Delete completed non-persistent tasks
        if (tasksToDelete.length) {
          await prisma.task.deleteMany({
            where: {
              id: { in: tasksToDelete },
              userId: user.id,
            },
          });
        }

        // Reset completion status for remaining tasks
        if (tasksToUpdate.length) {
          await prisma.task.updateMany({
            where: {
              id: { in: tasksToUpdate },
              userId: user.id,
            },
            data: {
              isComplete: false,
            },
          });
        }

        return {
          userId: user.id,
          completionPercentage,
          tasksProcessed: tasks.length,
          tasksDeleted: tasksToDelete.length,
          tasksReset: tasksToUpdate.length,
        };
      })
    );

    return NextResponse.json(
      {
        message: "Day ended successfully",
        results: results,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("End day operation failed:", error);
    return NextResponse.json(
      { message: "Failed to process end of day tasks" },
      { status: 500 }
    );
  }
}
