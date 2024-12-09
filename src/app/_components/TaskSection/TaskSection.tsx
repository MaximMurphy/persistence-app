import PersistentSection from "./PersistentSection";
import DailySection from "./DailySection";

const persistentList = [
  {
    id: "1",
    name: "Task 1",
    isComplete: false,
  },
  {
    id: "2",
    name: "Task 2",
    isComplete: false,
  },
  {
    id: "3",
    name: "Task 3",
    isComplete: false,
  },
];

export default function TaskSection() {
  return (
    <div className="w-full h-full flex justify-center items-center border-2 border-browser rounded-md">
      <PersistentSection taskList={persistentList} />
      <DailySection />
    </div>
  );
}
