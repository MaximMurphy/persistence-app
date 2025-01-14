import type { TaskSectionProps } from "@/types/types";
import type { Task } from "@/types/types";

export default function EndDay({
  taskList,
  updateTaskList,
  deleteTask,
}: TaskSectionProps) {
  return (
    <button
      onClick={() => endDay(taskList, updateTaskList)}
      className="w-12 p-2 bg-background brightness-90 border border-browser rounded-md hover:outline-none hover:ring-2 hover:ring-accentBlue transition ease-in-out duration-200"
    >
      End Day
    </button>
  );
}

const endDay = (
  taskList: Task[],
  updateTaskList: (newTaskList: Task[]) => void
) => {
  console.log("Day ended");
  const completionPercentage = saveCompletionPercentage(taskList);
  console.log("Completion percentage: ", completionPercentage);
  recycleTasks(taskList, updateTaskList);
};

// TODO: save completion percentage for day to DB.
const saveCompletionPercentage = (taskList: Task[]) => {
  const completedTasks = taskList.filter((task) => task.isComplete).length;
  const totalTasks = taskList.length;
  return (completedTasks / totalTasks) * 100;
};

// Cycle through tasks, delete tasks that are not persistent and complete, and reset tasks to isComplete: false
const recycleTasks = (
  taskList: Task[],
  updateTaskList: (newTaskList: Task[]) => void
) => {
  const newTaskList = taskList
    .filter((task) => task.isPersistent || !task.isComplete)
    .map((task) => ({ ...task, isComplete: false }));
  updateTaskList(newTaskList);
};
