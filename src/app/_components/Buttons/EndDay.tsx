import type { EndDayProps } from "@/types/types";
import type { Task } from "@/types/types";

export default function EndDay({
  taskList,
  updateTaskList,
  deleteTask,
}: EndDayProps) {
  const endDay = async () => {
    console.log("Day ended");

    // Calculate completion percentage
    const completionPercentage = calculateCompletionPercentage(taskList);
    console.log("Completion percentage: ", completionPercentage);

    // Send completion percentage to DB
    await saveCompletionPercentage(completionPercentage);

    // Reset for next day
    recycleTasks(taskList, updateTaskList, deleteTask);
  };

  return (
    <button
      onClick={endDay}
      className="w-fit p-2 bg-background brightness-90 text-cream/75 border border-browser rounded-md hover:outline-none hover:ring-2 hover:ring-accentBlue transition ease-in-out duration-200"
    >
      End Day
    </button>
  );
}

const calculateCompletionPercentage = (taskList: Task[]) => {
  const completedTasks = taskList.filter((task) => task.isComplete).length;
  const totalTasks = taskList.length;
  return totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
};

const saveCompletionPercentage = async (percentage: number) => {
  try {
    const response = await fetch("/api/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completionPercentage: percentage }),
    });

    if (!response.ok) {
      throw new Error("Failed to save completion percentage");
    }
  } catch (error) {
    console.error("Failed to save completion:", error);
  }
};

const recycleTasks = (
  taskList: Task[],
  updateTaskList: (newTaskList: Task[]) => void,
  deleteTask: (taskId: string) => void
) => {
  const tasksToDelete = taskList.filter(
    (task) => !task.isPersistent && task.isComplete
  );
  const tasksToUpdate = taskList
    .filter((task) => task.isPersistent || !task.isComplete)
    .map((task) => ({ ...task, isComplete: false }));

  // Delete tasks
  for (const task of tasksToDelete) {
    deleteTask(task.id);
  }

  // Update remaining tasks
  updateTaskList(tasksToUpdate);
};
