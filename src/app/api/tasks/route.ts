import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { name } = await req.json();
  const userEmail = session.user?.email;
  if (!userEmail) {
    return NextResponse.json(
      { message: "User email not found" },
      { status: 400 }
    );
  }

  try {
    const newTask = await prisma.task.create({
      data: {
        name,
        isComplete: false,
        isPersistent: false,
        user: {
          connect: { email: userEmail },
        },
      },
    });
    return NextResponse.json(newTask, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create task" },
      { status: 500 }
    );
  }
}
