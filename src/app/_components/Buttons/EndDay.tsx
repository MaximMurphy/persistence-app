import type { Props } from "@/types/types";

export default function EndDay(taskList: Props) {
  return (
    <button
      onClick={() => endDay(taskList)}
      className="w-12 p-2 bg-background brightness-90 border border-browser rounded-md hover:outline-none hover:ring-2 hover:ring-accentBlue transition ease-in-out duration-200"
    >
      End Day
    </button>
  );
}

const endDay = (taskList: Props) => {
  console.log("Day ended", taskList);
  const completionPercentage = saveCompletionPercentage(taskList);
  console.log("Completion percentage: ", completionPercentage);
  recycleTasks(taskList);
};

// TODO: save completion percentage for day to DB.
const saveCompletionPercentage = (taskList: Props) => {
  const completedTasks = taskList.taskList.filter(
    (task) => task.isComplete
  ).length;
  const totalTasks = taskList.taskList.length;
  return (completedTasks / totalTasks) * 100;
};

// TODO: cycle through tasks, delete tasks that are not persistent or not complete, and reset tasks to isComplete: false
const recycleTasks = (taskList: Props) => {
  console.log(taskList);
};
