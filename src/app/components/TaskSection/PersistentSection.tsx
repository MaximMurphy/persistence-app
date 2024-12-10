"use client";

import { useState, useEffect } from "react";
import type { TaskSectionProps } from "@/types/types";
import type { Task } from "@/types/types";
import TaskCard from "./TaskCard";

export default function PersistentSection({
  taskList,
  updateTaskList,
}: TaskSectionProps) {
  const [tasks, setTasks] = useState(
    taskList.filter((task) => task.isPersistent)
  );

  useEffect(() => {
    setTasks(taskList.filter((task) => task.isPersistent));
  }, [taskList]);

  const toggleComplete = (id: string) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    updateTaskList(newTaskList);
  };

  const togglePersistence = (task: Task) => {
    const newTaskList = taskList.map((t) => {
      if (t.id === task.id) {
        return { ...t, isPersistent: !t.isPersistent };
      }
      return t;
    });
    updateTaskList(newTaskList);
  };

  return (
    <div className="bg-background h-full w-full flex flex-col justify-start px-4 py-4 lg:py-2 gap-4 border-b lg:border-b-0 lg:border-r border-browser overflow-scroll no-scrollbar">
      <p className="underline">Persistent</p>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            togglePersistence={togglePersistence}
          />
        ))}
      </div>
    </div>
  );
}
