import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import TaskSectionClient from "./TaskSectionClient";
import type { Task } from "@/types/types";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TaskSectionServer() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  const tasks: Task[] = userEmail
    ? await prisma.task.findMany({
        where: {
          user: {
            email: userEmail,
          },
        },
      })
    : [];

  return <TaskSectionClient initialTasks={tasks} />;
}
