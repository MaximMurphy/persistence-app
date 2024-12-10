import clsx from "clsx";

export default function CompletionGraph({ year }: { year: number }) {
  const daysInYear: number[] =
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? Array.from({ length: 366 }, (_, i) => i)
      : Array.from({ length: 365 }, (_, i) => i);

  const dates = daysInYear.map((day) => {
    const date = new Date(year, 0, day + 1);
    const dayOfWeek = date.toLocaleString("default", { weekday: "long" });
    const dayNumber = getOrdinalSuffix(date.getDate());
    const month = date.toLocaleString("default", { month: "long" });
    const completionPercentage = Math.random();

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
      <div className="w-fit h-fit grid grid-rows-7 grid-flow-col gap-[4px] border lg:border-2 border-browser p-4 rounded-md overflow-scroll no-scrollbar">
        {daysInYear.map((day, index) => (
          <div
            key={day}
            className={clsx(
              "w-[12px] h-2 bg-browser hover:scale-150 hover:border hover:border-accentPink",
              dates[index].completionPercentage <= 0.1
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
