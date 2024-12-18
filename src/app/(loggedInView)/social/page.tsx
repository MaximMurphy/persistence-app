import CompletionGraph from "@/app/_components/CompletionGraph/CompletionGraph";

export default function Social() {
  const year = new Date().getFullYear();

  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-6 lg:px-48 pt-8 lg:pt-0 pb-12 lg:pb-0 gap-4">
      <div className="w-full flex items-start px-4 lg:px-24 text-2xl">
        <h1>Social Feed</h1>
      </div>
      <div className="w-full lg:w-[60rem] h-fit lg:h-[36rem] flex flex-col py-4 px-4 gap-4 border lg:border-2 border-browser rounded-md text-sm lg:text-base overflow-scroll no-scrollbar">
        <div className="flex flex-col gap-2">
          <p>Maxim Murphy</p>
          <CompletionGraph year={year} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Maxim Murphy</p>
          <CompletionGraph year={year} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Maxim Murphy</p>
          <CompletionGraph year={year} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Maxim Murphy</p>
          <CompletionGraph year={year} />
        </div>
        <div className="flex flex-col gap-2">
          <p>Maxim Murphy</p>
          <CompletionGraph year={year} />
        </div>
      </div>
    </div>
  );
}
