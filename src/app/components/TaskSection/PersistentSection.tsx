"use client";

import { useState } from "react";
import type { Props } from "@/types/types";
import Task from "./Task";

export default function PersistentSection({ taskList }: Props) {
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
    <div className="bg-gradient-to-b lg:bg-gradient-to-br from-background via-background to-accentPurple/30 h-full w-full flex flex-col justify-start px-4 py-4 lg:py-2 gap-4 border-b lg:border-b-0 lg:border-r border-browser overflow-scroll no-scrollbar">
      <p className="underline">Persistent</p>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            persistent
            handleChecked={handleChecked}
          />
        ))}
      </div>
    </div>
  );
}
