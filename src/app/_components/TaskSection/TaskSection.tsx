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
  {
    id: "4",
    name: "Task 4",
    isComplete: false,
  },
  {
    id: "5",
    name: "Task 5",
    isComplete: false,
  },
  {
    id: "6",
    name: "Task 6",
    isComplete: false,
  },
  {
    id: "7",
    name: "Task 7",
    isComplete: false,
  },
  {
    id: "8",
    name: "Task 8",
    isComplete: false,
  },
];

export default function TaskSection() {
  return (
    <div className="w-full h-full lg:h-72 flex flex-col lg:flex-row justify-center items-center border-2 border-browser rounded-md overflow-scroll">
      <PersistentSection taskList={persistentList} />
      <DailySection />
    </div>
  );
}
