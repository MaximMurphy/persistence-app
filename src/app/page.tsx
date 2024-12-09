import CompletionGraph from "./_Components/CompletionGraph/CompletionGraph";
import { getOrdinalSuffix } from "./_Components/CompletionGraph/CompletionGraph";
import TaskSection from "./_Components/TaskSection/TaskSection";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="h-full w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-0 py-4 gap-12">
      <div className="w-full lg:w-fit h-full flex flex-col items-center justify-start gap-12">
        <div className="w-full flex flex-col gap-2">
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
    <div className="w-full flex text-lg lg:text-2xl justify-between">
      <p>{new Date().toLocaleString("default", { weekday: "long" })}</p>
      <p>
        {new Date().toLocaleString("default", { month: "long" })}{" "}
        {getOrdinalSuffix(new Date().getDate())}, {year}
      </p>
    </div>
  );
};
