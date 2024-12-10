import { clsx } from "clsx";
import type { Task } from "@/types/types";
import { Icon } from "@iconify-icon/react";
import { useState, useRef } from "react";

export default function TaskCard({
  task,
  toggleComplete,
  togglePersistence,
  updateTask,
}: {
  task: Task;
  toggleComplete: (id: string) => void;
  togglePersistence: (task: Task) => void;
  updateTask: (task: Task, newName: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const editTask = () => {
    setIsEditing(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const saveTask = () => {
    updateTask(task, newName);
    setIsEditing(false);
  };

  return (
    <div key={task.id} className="lg:w-fit flex gap-4 items-center">
      <button
        onClick={() => toggleComplete(task.id)}
        className={clsx(
          "bg-background brightness-90 flex items-center justify-center relative w-6 h-6 border border-browser rounded-sm hover:outline-none hover:ring-2 hover:ring-accentBlue",
          task.isComplete && "bg-[#47155b] opacity-90"
        )}
      >
        {task.isComplete && <Icon icon="lucide:check" width="12" height="12" />}
      </button>
      <div
        className={clsx(
          "w-[17rem] lg:w-[22.75rem] flex justify-between px-4 py-2 bg-background brightness-90 border border-browser rounded-md",
          task.isComplete &&
            "bg-gradient-to-br from-background to-accentPurple/60",
          isEditing && "bg-[#47155b]/50"
        )}
      >
        {isEditing ? (
          <input
            type="text"
            value={newName}
            ref={inputRef}
            onChange={(e) => setNewName(e.target.value)}
            className="text-cream/90 bg-transparent focus:outline-none focus:ring-0"
            onBlur={saveTask}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveTask();
              }
            }}
          />
        ) : (
          <p
            className={clsx(
              "h-fit overflow-x-auto whitespace-nowrap overflow-scroll no-scrollbar",
              task.isComplete ? "line-through" : ""
            )}
          >
            {task.name}
          </p>
        )}

        <div className="flex gap-2">
          <button
            onClick={() => (isEditing ? saveTask() : editTask())}
            className={clsx(
              "flex items-center justify-center relative w-6 h-6  bg-background brightness-75 border border-browser rounded-sm hover:brightness-100 hover:outline-none hover:ring-2 hover:ring-accentBlue"
            )}
          >
            {isEditing ? (
              <Icon icon="lucide:save" width="12" height="12" />
            ) : (
              <Icon icon="lucide:edit" width="12" height="12" />
            )}
          </button>
          <button
            onClick={() => togglePersistence(task)}
            className={clsx(
              "flex items-center justify-center relative w-6 h-6 bg-background brightness-75 border border-browser rounded-sm hover:brightness-100 hover:outline-none hover:ring-2 hover:ring-accentBlue"
            )}
          >
            {task.isPersistent ? "✦" : "✧"}
          </button>
        </div>
      </div>
    </div>
  );
}
