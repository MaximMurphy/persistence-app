"use client";

import clsx from "clsx";
import { getOrdinalSuffix } from "@/app/_components/DateDisplay/DateDisplay";
import { CompletionGraphProps } from "@/types/types";

export default function CompletionGraph({
  year,
  existingCompletions,
}: CompletionGraphProps) {
  //console.log(existingCompletions);

  // Calculate days in year
  const daysInYear: number[] =
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? Array.from({ length: 366 }, (_, i) => i)
      : Array.from({ length: 365 }, (_, i) => i);

  // Create dates array with completion data
  const dates = daysInYear.map((day) => {
    const date = new Date(Date.UTC(year, 0, day + 1));
    const dayOfWeek = new Intl.DateTimeFormat("default", {
      weekday: "long",
      timeZone: "UTC",
    }).format(date);
    const dayNumber = getOrdinalSuffix(date.getUTCDate());
    const month = new Intl.DateTimeFormat("default", {
      month: "long",
      timeZone: "UTC",
    }).format(date);

    console.log(
      `Date: ${date.toISOString()}, Day: ${dayNumber}, Month: ${month}`
    );

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
                : dates[index].completionPercentage <= 0.25
                ? "bg-accentPurple/20"
                : dates[index].completionPercentage <= 0.5
                ? "bg-accentPurple/40"
                : dates[index].completionPercentage <= 0.75
                ? "bg-accentPurple/60"
                : dates[index].completionPercentage < 1
                ? "bg-accentPurple/80"
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
