"use client";

import { useSession, signIn } from "next-auth/react";

export const SignIn = () => {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <div className="w-fit hover:underline lg:pr-24">...</div>;
  }

  if (status === "authenticated") {
    return (
      <div className="w-fit h-fit p-4 border-2 border-browser rounded-md">
        <p>Welcome {session.user?.name}!</p>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="w-fit h-fit p-4 border-2 border-browser rounded-md hover:scale-105 hover:bg-gradient-to-br hover:from-background hover:to-accentPurple/50 transition ease-in-out duration-200"
    >
      <p>Sign in to get started</p>
    </button>
  );
};
