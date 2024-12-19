"use client";

import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session, status } = useSession();
  console.log(session, status);

  return (
    <div className="w-fit flex gap-4 text-cream/75">
      {status === "loading" ? (
        <Icon icon="eos-icons:loading" width="24" height="24" />
      ) : status === "authenticated" ? (
        <Image
          src={session.user?.image ?? "/logo.png"}
          width={125}
          height={125}
          alt="Your Name"
          className="rounded-md"
        />
      ) : (
        <p>No Profile Picture Found</p>
      )}
      <p className="">{session?.user?.name}</p>
    </div>
  );
}
