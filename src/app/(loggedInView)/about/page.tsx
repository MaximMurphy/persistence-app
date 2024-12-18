import MockTask, {
  CompletedButton,
  DeleteButton,
  EditButton,
  PersistButton,
} from "@/app/_components/TaskSection/MockTask";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 pt-8 lg:pt-0 pb-12 lg:pb-0">
      <div className="w-full lg:w-[60rem] h-fit flex flex-col py-4 px-4 gap-4 border lg:border-2 border-browser rounded-md text-sm lg:text-base">
        <div className="flex flex-col gap-2">
          <h1 className="underline">Key:</h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 text-xs">
            <div className="h-12 flex p-2 items-center gap-2 border border-browser rounded-md">
              <CompletedButton />
              <p className="text-cream/75">Task Completed</p>
            </div>
            <div className="h-12 flex p-2 items-center gap-2 border border-browser rounded-md">
              <DeleteButton />
              <p className="text-cream/75">Delete Task</p>
            </div>
            <div className="h-12 flex p-2 items-center gap-2 border border-browser rounded-md">
              <EditButton />
              <p className="text-cream/75">Edit Task Name</p>
            </div>
            <div className="h-12 flex p-2 items-center gap-2 border border-browser rounded-md">
              <PersistButton />
              <p className="text-cream/75">Make Task Persistent</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="underline">Task Structure: </h1>
          <MockTask />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="underline">Persistence Explained: </h1>
          <p className="text-cream/75">
            New tasks are added to the Daily Section upon creation. These tasks,
            if completed, will only last within the day they are created.
            Unfinished Daily Tasks will remain in the Daily Section for each
            following day, until they are completed. Persistent Tasks appear in
            the Persistent Section and will repeat every day regardless of
            whether or not they are completed. Tasks can be toggled between the
            Persistent and Daily Sections using the persist button defined
            above.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="underline">Chart Explained: </h1>
          <p className="text-cream/75">
            Each rectangle in the chart represents a day of the year. The
            intensity of its color directly correlates to the percentage of
            tasks completed on that day. It is a great way to track your
            productivity over time.
          </p>
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <p className="text-xs opacity-25">{`© ${new Date().getFullYear()} Maxim Murphy - All rights reserved`}</p>
        </div>
      </div>
    </div>
  );
}
