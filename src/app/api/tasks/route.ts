import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const generateUUID = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

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
        id: generateUUID(),
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

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id, ...updates } = await req.json();

  try {
    const updatedTask = await prisma.task.update({
      where: { id },
      data: updates,
    });
    return NextResponse.json(updatedTask, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update task" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();

  try {
    await prisma.task.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Task deleted" }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete task" },
      { status: 500 }
    );
  }
}
