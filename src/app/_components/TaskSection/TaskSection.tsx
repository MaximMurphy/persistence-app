"use client";

import { useState } from "react";
import PersistentSection from "./PersistentSection";
import DailySection from "./DailySection";
import type { Task } from "@/types/types";

const generateUUID = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const initialTaskList: Task[] = [
  {
    id: generateUUID(),
    name: "Task 1",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: generateUUID(),
    name: "Task 2",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: generateUUID(),
    name: "Task 3",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: generateUUID(),
    name: "Task 4",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: generateUUID(),
    name: "Task 5",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: generateUUID(),
    name: "Task 6",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: generateUUID(),
    name: "Task 7",
    isComplete: false,
    isPersistent: false,
  },
  {
    id: generateUUID(),
    name: "Task 8",
    isComplete: false,
    isPersistent: false,
  },
];

export default function TaskSection() {
  const [taskList, setTaskList] = useState(initialTaskList);

  const completedTasks = taskList.filter((task) => task.isComplete).length;
  const totalTasks = taskList.length;
  const completionPercentage = (completedTasks / totalTasks) * 100;

  /* const nextDayTasks = taskList.filter(
    (task) => task.isPersistent || (!task.isPersistent && !task.isComplete)
  );
*/

  const updateTaskList = (newTaskList: Task[]) => {
    setTaskList(newTaskList);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 lg:gap-2 mb-12 lg:mb-0">
      <div className="w-full h-full lg:h-96 flex flex-col lg:flex-row justify-center items-center border lg:border-2 border-browser rounded-md overflow-scroll">
        <PersistentSection
          taskList={taskList}
          updateTaskList={updateTaskList}
        />
        <DailySection taskList={taskList} updateTaskList={updateTaskList} />
      </div>
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="w-full lg:w-1/2 flex">
          <CompletionReport
            completedTasks={completedTasks}
            totalTasks={totalTasks}
            completionPercentage={completionPercentage}
          />
        </div>
        <div className="w-full lg:w-1/2 flex">
          <NewTaskInput taskList={taskList} setTaskList={setTaskList} />
        </div>
      </div>
    </div>
  );
}

const NewTaskInput = ({
  taskList,
  setTaskList,
}: {
  taskList: Task[];
  setTaskList: (newTaskList: Task[]) => void;
}) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTaskName) {
      const newTaskList = [
        ...taskList,
        {
          id: generateUUID(),
          name: newTaskName,
          isComplete: false,
          isPersistent: false,
        },
      ];
      setTaskList(newTaskList);
      setNewTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2 items-center">
      <input
        type="text"
        value={newTaskName}
        onChange={(event) => setNewTaskName(event.target.value)}
        placeholder="New Task"
        className="w-full px-4 py-2 bg-background brightness-90 border border-browser rounded-md focus:outline-none focus:ring-2 focus:ring-accentBlue transition ease-in-out duration-200"
      />
      <button
        type="submit"
        className="w-12 p-2 bg-background brightness-90 border border-browser rounded-md hover:outline-none hover:ring-2 hover:ring-accentBlue transition ease-in-out duration-200"
      >
        <span className="opacity-50">+</span>
      </button>
    </form>
  );
};

const CompletionReport = ({
  completedTasks,
  totalTasks,
  completionPercentage,
}: {
  completedTasks: number;
  totalTasks: number;
  completionPercentage: number;
}) => {
  return (
    <div className="h-16 lg:h-full w-full flex gap-0 lg:gap-2 items-center justify-center px-4 py-2 bg-background brightness-90 border border-browser rounded-md text-cream/75 text-sm">
      <p>
        {completedTasks === 0
          ? "🥺 "
          : completedTasks > 0 && completedTasks <= totalTasks / 2
          ? "🙂 "
          : completedTasks > totalTasks / 2 && completedTasks < totalTasks
          ? "🤠 "
          : completedTasks === totalTasks
          ? "😇 "
          : ""}
        {`${completedTasks}/${totalTasks} tasks completed (${completionPercentage.toFixed(
          0
        )}%)`}
      </p>
    </div>
  );
};
