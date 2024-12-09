export default function DailySection() {
  return (
    <div className="h-full w-full flex flex-col justify-start px-4 py-2 gap-4 border-l border-browser overflow-scroll">
      <p className="underline">Daily</p>
      <form className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="New Task"
          className="p-2 bg-background brightness-90 border border-browser rounded-md focus:outline-none focus:ring-2 focus:ring-accentBlue"
        />
      </form>
    </div>
  );
}
