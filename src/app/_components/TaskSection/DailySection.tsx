"use client";

import { useState, useEffect } from "react";
import type { TaskSectionProps } from "@/types/types";
import type { Task } from "@/types/types";
import TaskCard from "./TaskCard";

export default function DailySection({
  taskList,
  updateTaskList,
  deleteTaskInPlace,
}: TaskSectionProps) {
  const [tasks, setTasks] = useState(
    taskList.filter((task) => !task.isPersistent)
  );

  useEffect(() => {
    setTasks(taskList.filter((task) => !task.isPersistent));
  }, [taskList]);

  const updateTask = (task: Task, updates: Partial<Task>) => {
    const newTaskList = taskList.map((t) => {
      if (t.id === task.id) {
        return { ...t, ...updates };
      }
      return t;
    });
    updateTaskList(newTaskList);
  };

  return (
    <div className="bg-background h-full w-full flex flex-col justify-start px-4 py-4 lg:py-2 gap-4 lg:border-l border-browser overflow-scroll no-scrollbar">
      <div className="flex justify-between items-end">
        <p className="underline">Daily</p>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            updateTask={(task, updates) => updateTask(task, updates)}
            deleteTaskInPlace={(task) => deleteTaskInPlace(task.id)}
          />
        ))}
      </div>

      <div className="w-full h-fit flex items-center justify-end text-[8px] lg:text-xs px-4 text-cream/50">
        <div className="group w-fit flex items-center gap-4">
          <p className="opacity-0 peer has-[~_.peer:hover]:opacity-100 underline transition ease-in-out duration-500">
            Pressing ✧ will persist your task for the future.
          </p>
          <p className="peer bg-background brightness-90 w-[3.5rem] h-6 flex items-center justify-center text-center text-xs border border-browser rounded-sm cursor-default hover:outline-none hover:ring-2 hover:ring-accentBlue transition ease-in-out duration-200">
            ✧?
          </p>
        </div>
      </div>
    </div>
  );
}
