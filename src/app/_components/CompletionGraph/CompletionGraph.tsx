"use client";

import clsx from "clsx";
import { getOrdinalSuffix } from "@/app/_components/DateDisplay/DateDisplay";
import { CompletionGraphProps } from "@/types/types";

export default function CompletionGraph({
  year,
  existingCompletions,
}: CompletionGraphProps) {
  console.log(existingCompletions);

  // Calculate days in year
  const daysInYear: number[] =
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? Array.from({ length: 366 }, (_, i) => i)
      : Array.from({ length: 365 }, (_, i) => i);

  // Create dates array with completion data
  const dates = daysInYear.map((day) => {
    const date = new Date(Date.UTC(year, 0, day + 1));
    const dayOfWeek = date.toLocaleString("default", { weekday: "long" });
    const dayNumber = getOrdinalSuffix(date.getUTCDate());
    const month = date.toLocaleString("default", { month: "long" });

    const completion = existingCompletions.find(
      (c) => new Date(c.date).toDateString() === date.toDateString()
    );

    const completionPercentage = completion
      ? completion.completionPercentage / 100
      : 0;

    return {
      dayOfWeek,
      dayNumber,
      month,
      year,
      completionPercentage,
    };
  });

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full h-fit grid grid-rows-7 grid-flow-col gap-[4px] border lg:border-2 border-browser p-4 rounded-md overflow-scroll no-scrollbar">
        {daysInYear.map((day, index) => (
          <div
            key={day}
            className={clsx(
              "w-[12px] h-2 hover:scale-150 hover:border hover:border-cream rounded-sm",
              dates[index].completionPercentage == 0
                ? "bg-[#0d131c]"
                : dates[index].completionPercentage <= 0.1
                ? "bg-accentPurple/10"
                : dates[index].completionPercentage <= 0.2
                ? "bg-accentPurple/20"
                : dates[index].completionPercentage <= 0.3
                ? "bg-accentPurple/30"
                : dates[index].completionPercentage <= 0.4
                ? "bg-accentPurple/40"
                : dates[index].completionPercentage <= 0.5
                ? "bg-accentPurple/50"
                : dates[index].completionPercentage <= 0.6
                ? "bg-accentPurple/60"
                : dates[index].completionPercentage <= 0.7
                ? "bg-accentPurple/70"
                : dates[index].completionPercentage <= 0.8
                ? "bg-accentPurple/80"
                : dates[index].completionPercentage <= 0.9
                ? "bg-accentPurple/90"
                : "bg-accentPurple/100"
            )}
            title={`${dates[index].month} ${dates[index].dayNumber}, ${
              dates[index].year
            } Completed: ${(dates[index].completionPercentage * 100).toFixed(
              0
            )}%`}
          ></div>
        ))}
      </div>
    </div>
  );
}
