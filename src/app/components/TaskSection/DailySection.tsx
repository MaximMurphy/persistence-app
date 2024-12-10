"use client";

import { useState } from "react";
import type { Props } from "@/types/types";
import Task from "./Task";

export default function DailySection({ taskList }: Props) {
  const [tasks, setTasks] = useState(
    taskList.map((task) => ({
      ...task,
    }))
  );

  const handleChecked = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="bg-gradient-to-t lg:bg-gradient-to-bl from-background via-background to-accentPurple/30 h-full w-full flex flex-col justify-start px-4 py-4 lg:py-2 gap-4 lg:border-l border-browser overflow-scroll no-scrollbar">
      <div className="flex justify-between items-end">
        <p className="underline">Daily</p>
        <p className="text-xs opacity-50 underline">Persist?</p>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <Task key={task.id} task={task} handleChecked={handleChecked} />
        ))}
      </div>
    </div>
  );
}
