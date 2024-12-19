import CompletionGraph from "@/app/_components/CompletionGraph/CompletionGraph";
import DateDisplay from "@/app/_components/DateDisplay/DateDisplay";
import TaskSection from "@/app/_components/TaskSection/TaskSection";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  const year = new Date().getFullYear();

  return (
    <div className="h-full w-full flex flex-col items-center justify-start px-6 md:px-12 lg:px-0 py-4 lg:py-0 gap-12">
      <div className="w-full lg:w-fit h-full flex flex-col items-center justify-start gap-8">
        <div className="w-full lg:w-[60rem] flex flex-col gap-2">
          <DateDisplay year={year} />
          <CompletionGraph year={year} />
          <TaskSection />
        </div>
      </div>
    </div>
  );
}
