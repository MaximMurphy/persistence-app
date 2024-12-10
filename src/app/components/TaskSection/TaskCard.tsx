import { clsx } from "clsx";
import type { Task } from "@/types/types";
import { Icon } from "@iconify-icon/react";
import { useState, useRef } from "react";

export default function TaskCard({
  task,
  updateTask,
  deleteTask,
}: {
  task: Task;
  updateTask: (task: Task, updates: Partial<Task>) => void;
  deleteTask: (task: Task) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const editTask = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const saveTask = () => {
    updateTask(task, { name: newName });
    setIsEditing(false);
  };

  return (
    <div key={task.id} className="lg:w-fit flex gap-4 items-center">
      <button
        onClick={() => updateTask(task, { isComplete: !task.isComplete })}
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
          <div className="flex gap-2 group">
            <button
              onClick={() => deleteTask(task)}
              className={clsx(
                "hidden group-hover:flex items-center justify-center relative w-6 h-6 bg-background brightness-75 border border-browser rounded-sm hover:brightness-100 hover:outline-none hover:ring-2 hover:ring-red-900"
              )}
            >
              <Icon icon="lucide:trash" width="12" height="12" />
            </button>
            <button
              onClick={() => (isEditing ? saveTask() : editTask())}
              className={clsx(
                "flex items-center justify-center relative w-6 h-6  bg-background brightness-75 border border-browser rounded-sm hover:brightness-100 hover:outline-none hover:ring-2 hover:ring-accentBlue",
                isEditing && "hover:ring-green-900"
              )}
            >
              {isEditing ? (
                <Icon icon="lucide:save" width="12" height="12" />
              ) : (
                <Icon icon="lucide:edit" width="12" height="12" />
              )}
            </button>
          </div>

          <button
            onClick={() =>
              updateTask(task, { isPersistent: !task.isPersistent })
            }
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
