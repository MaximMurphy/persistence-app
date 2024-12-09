import CompletionGraph from "./_Components/CompletionGraph/CompletionGraph";
import { getOrdinalSuffix } from "./_Components/CompletionGraph/CompletionGraph";
import TaskSection from "./_Components/TaskSection/TaskSection";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="h-full w-full flex flex-col items-center justify-start py-8 gap-12 border-2 border-accentPink">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <DateDisplay year={year} />
          <CompletionGraph year={year} />
        </div>
        <TaskSection />
      </div>
    </div>
  );
}

const DateDisplay = ({ year }: { year: number }) => {
  return (
    <div className="flex justify-between text-2xl">
      <p>{new Date().toLocaleString("default", { weekday: "long" })}</p>
      <p>
        {new Date().toLocaleString("default", { month: "long" })}{" "}
        {getOrdinalSuffix(new Date().getDate())}, {year}
      </p>
    </div>
  );
};
