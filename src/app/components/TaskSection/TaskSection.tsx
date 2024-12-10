"use client";

import { useState } from "react";
import PersistentSection from "./PersistentSection";
import DailySection from "./DailySection";
import type { Task } from "@/types/types";

const initialTaskList: Task[] = [
  {
    id: "1",
    name: "Task 1",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: "2",
    name: "Task 2",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: "3",
    name: "Task 3",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: "4",
    name: "Task 4",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: "5",
    name: "Task 5",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: "6",
    name: "Task 6",
    isComplete: false,
    isPersistent: true,
  },
  {
    id: "7",
    name: "Task 7",
    isComplete: false,
    isPersistent: false,
  },
  {
    id: "8",
    name: "Task 8",
    isComplete: false,
    isPersistent: false,
  },
];

export default function TaskSection() {
  const [taskList, setTaskList] = useState(initialTaskList);

  const updateTaskList = (newTaskList: Task[]) => {
    setTaskList(newTaskList);
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 lg:gap-2 mb-12 lg:mb-0">
      <div className="w-full h-full lg:h-72 flex flex-col lg:flex-row justify-center items-center border lg:border-2 border-browser rounded-md overflow-scroll">
        <PersistentSection
          taskList={taskList}
          updateTaskList={updateTaskList}
        />
        <DailySection taskList={taskList} updateTaskList={updateTaskList} />
      </div>

      <div className="w-full flex justify-end">
        <NewTaskInput taskList={taskList} setTaskList={setTaskList} />
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
          id: (taskList.length + 1).toString(),
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
    <form
      onSubmit={handleSubmit}
      className="w-full lg:w-1/2 flex gap-2 items-center"
    >
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
