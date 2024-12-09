export default function CompletionGraph() {
  const year = new Date().getFullYear();

  const daysInYear: number[] =
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
      ? Array.from({ length: 366 }, (_, i) => i)
      : Array.from({ length: 365 }, (_, i) => i);

  return (
    <div className="w-fit h-fit grid grid-rows-7 grid-flow-col gap-[4px]">
      {daysInYear.map((day) => (
        <div
          key={day}
          className="w-[12px] h-2 bg-accentPurple hover:bg-accentPink"
        ></div>
      ))}
    </div>
  );
}
