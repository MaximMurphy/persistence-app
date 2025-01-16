import CompletionGraphServer from "@/app/_components/CompletionGraph/CompletionGraphServer";
import DateDisplay from "@/app/_components/DateDisplay/DateDisplay";
import TaskSectionServer from "@/app/_components/TaskSection/TaskSectionServer";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-0 py-4 lg:py-0 gap-12">
      <div className="w-full lg:w-fit h-full flex flex-col items-center justify-start gap-8">
        <div className="w-full lg:w-[60rem] flex flex-col gap-2">
          <DateDisplay />
          <CompletionGraphServer />
          <TaskSectionServer />
        </div>
      </div>
    </div>
  );
}
