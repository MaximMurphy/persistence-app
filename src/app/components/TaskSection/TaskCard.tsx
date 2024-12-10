import { clsx } from "clsx";
import type { Task } from "@/types/types";
import { Icon } from "@iconify-icon/react";

export default function TaskCard({
  task,
  toggleComplete,
  togglePersistence,
}: {
  task: Task;
  toggleComplete: (id: string) => void;
  togglePersistence: (task: Task) => void;
}) {
  const editTask = () => {
    console.log("Edit Task: ", task);
  };

  return (
    <div key={task.id} className="flex gap-4 items-center">
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
          "w-full flex justify-between px-4 py-2 bg-background brightness-90 border border-browser rounded-md",
          task.isComplete &&
            "bg-gradient-to-br from-background to-accentPurple/60"
        )}
      >
        <p className={clsx(task.isComplete ? "line-through" : "")}>
          {task.name}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => editTask()}
            className={clsx(
              "flex items-center justify-center relative w-6 h-6  bg-background brightness-75 border border-browser rounded-sm hover:brightness-100 hover:outline-none hover:ring-2 hover:ring-accentBlue"
            )}
          >
            <Icon icon="lucide:edit" width="12" height="12" />
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
