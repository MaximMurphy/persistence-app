import { clsx } from "clsx";
import type { Task } from "@/types/types";

export default function Task({
  task,
  handleChecked,
}: {
  task: Task;
  handleChecked: (id: string) => void;
}) {
  return (
    <div key={task.id} className="flex gap-4 items-center">
      <label className="h-full flex items-center cursor-pointer select-none">
        <input
          type="checkbox"
          className="absolute opacity-0 w-0 h-0"
          onClick={() => handleChecked(task.id)}
        />
        <span
          className={clsx(
            "flex items-center justify-center relative w-6 h-6 bg-background brightness-75 rounded-sm hover:brightness-[0.65]",
            task.isComplete && "bg-accentPink"
          )}
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
  );
}
