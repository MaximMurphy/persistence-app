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

    return {
      dayOfWeek,
      dayNumber,
      month,
      year,
    };
  });

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-fit h-fit grid grid-rows-7 grid-flow-col gap-[4px] border lg:border-2 border-browser p-4 rounded-md overflow-scroll no-scrollbar">
        {daysInYear.map((day, index) => (
          <div
            key={day}
            className="w-[12px] h-2 bg-accentPurple hover:bg-accentPink"
            title={`${dates[index].month} ${dates[index].dayNumber}, ${dates[index].year}`}
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
