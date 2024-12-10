"use client";

import { useState, useEffect } from "react";
import type { TaskSectionProps } from "@/types/types";
import type { Task } from "@/types/types";
import TaskCard from "./TaskCard";

export default function DailySection({
  taskList,
  updateTaskList,
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

  const deleteTask = (task: Task) => {
    const newTaskList = taskList.filter((t) => t.id !== task.id);
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
            deleteTask={(task) => deleteTask(task)}
          />
        ))}
      </div>

      <div className="w-full h-fit flex items-center justify-end text-[8px] lg:text-xs px-4 text-cream/50">
        <div className="group w-fit flex items-center gap-4">
          <p className="hidden group-hover:flex underline">
            Pressing ✧ will persist your task for the future.
          </p>
          <p className="peer bg-background brightness-90 w-[3.5rem] h-6 flex items-center justify-center text-center text-xs border border-browser rounded-sm cursor-help hover:outline-none hover:ring-2 hover:ring-accentBlue">
            ✧?
          </p>
        </div>
      </div>
    </div>
  );
}
