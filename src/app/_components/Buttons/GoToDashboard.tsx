"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function GoToDashboard() {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <Link
          href="/dashboard"
          className="w-fit h-fit p-4 border-2 border-browser rounded-md hover:scale-105 hover:border-accentPink transition ease-in-out duration-200"
        >
          Go to Dashboard
        </Link>
      )}
    </>
  );
}
