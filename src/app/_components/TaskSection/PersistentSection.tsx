"use client";

import { useState } from "react";

type Task = {
  id: string;
  name: string;
  isComplete: boolean;
};

type Props = {
  tasks: Task[];
};

export default function PersistentSection({ tasks }: Props) {
  const [tasksLocal, setTasksLocal] = useState(tasks);

  const handleToggleComplete = (id: string) => {
    const newTasks = tasksLocal.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasksLocal(newTasks);
  };

  return (
    <div className="h-full w-full flex flex-col justify-start px-4 py-2 gap-4 border-r border-browser">
      <p className="underline">Persistent</p>
      <div className="flex flex-col gap-2">
        {tasksLocal.map((task) => (
          <div key={task.id} className="flex gap-4 items-center">
            <label className="h-full flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
                onClick={() => handleToggleComplete(task.id)}
              />
              <span
                className={`flex items-center justify-center relative w-6 h-6 bg-background brightness-75 rounded-sm hover:brightness-[0.65] ${
                  task.isComplete ? "bg-accentBlue" : ""
                }`}
              >
                {task.isComplete ? "✦" : ""}
              </span>
            </label>
            <p
              className={`w-full px-4 py-2 bg-background brightness-90 border border-browser rounded-md ${
                task.isComplete ? "line-through" : ""
              }`}
            >
              {task.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}