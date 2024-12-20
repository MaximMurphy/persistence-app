import CompletionGraph, {
  getOrdinalSuffix,
} from "@/app/_components/CompletionGraph/CompletionGraph";
import TaskSection from "@/app/_components/TaskSection/TaskSection";
import MoonPhase from "@/app/_components/MoonPhase/MoonPhase";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="h-full w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-0 py-4 lg:py-0 gap-12">
      <div className="w-full lg:w-fit h-full flex flex-col items-center justify-start gap-8">
        <div className="w-full lg:w-[60rem] flex flex-col gap-2">
          <DateDisplay year={year} />
          <CompletionGraph year={year} />
          <TaskSection />
        </div>
      </div>
    </div>
  );
}

const DateDisplay = ({ year }: { year: number }) => {
  return (
    <div className="w-full flex text-lg lg:text-2xl justify-between">
      <div className="flex gap-2">
        <MoonPhase />
        <p>{new Date().toLocaleString("default", { weekday: "long" })}</p>
      </div>
      <p>
        {new Date().toLocaleString("default", { month: "long" })}{" "}
        {getOrdinalSuffix(new Date().getDate())}, {year}
      </p>
    </div>
  );
};
