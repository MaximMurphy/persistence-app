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

const dailyList = [
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
];

export default function TaskSection() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full h-full lg:h-72 flex flex-col lg:flex-row justify-center items-center border-2 border-browser rounded-md overflow-scroll">
        <PersistentSection taskList={persistentList} />
        <DailySection taskList={dailyList} />
      </div>

      <div className="w-full flex justify-end">
        <NewTaskInput />
      </div>
    </div>
  );
}

const NewTaskInput = () => {
  return (
    <form className="w-1/2 flex gap-2 items-center">
      <input
        type="text"
        placeholder="New Task"
        className="w-full p-2 bg-background brightness-90 border border-browser rounded-md focus:outline-none focus:ring-2 focus:ring-accentBlue"
      />
      <button
        type="submit"
        className="w-12 p-2 bg-background brightness-90 border border-browser rounded-md hover:outline-none hover:ring-2 hover:ring-accentBlue"
      >
        +
      </button>
    </form>
  );
};
