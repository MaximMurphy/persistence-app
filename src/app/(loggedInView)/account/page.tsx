import { SignOut } from "@/app/_components/Buttons/SignOut";
import UserInfo from "@/app/_components/UserInfo/UserInfo";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Account() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="w-full h-fit flex items-center justify-center px-6 lg:px-48 pt-8 lg:pt-0 pb-12 lg:pb-0 gap-4 lg:gap-12">
      <div className="w-full lg:w-96 h-fit flex justify-between py-4 px-4 gap-4 border lg:border-2 border-browser rounded-md text-sm lg:text-base">
        <UserInfo />
        <SignOut />
      </div>
    </div>
  );
}
