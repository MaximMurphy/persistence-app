import { unstable_noStore as noStore } from "next/cache";
import MoonPhase from "@/app/_components/MoonPhase/MoonPhase";

export default function DateDisplay({ year }: { year: number }) {
  // prevent caching
  noStore();

  // Get current date
  const date = new Date();

  return (
    <div className="w-full flex text-lg lg:text-2xl justify-between">
      <div className="flex gap-2">
        <MoonPhase />
        <p>{date.toLocaleString("default", { weekday: "long" })}</p>
      </div>
      <p>
        {date.toLocaleString("default", { month: "long" })}{" "}
        {getOrdinalSuffix(date.getDate())}, {year}
      </p>
    </div>
  );
}

export const getOrdinalSuffix = (number: number): string => {
  const lastDigit = number % 10;
  if (lastDigit === 1 && number !== 11) {
    return number + "st";
  }
  if (lastDigit === 2 && number !== 12) {
    return number + "nd";
  }
  if (lastDigit === 3 && number !== 13) {
    return number + "rd";
  }
  return number + "th";
};
