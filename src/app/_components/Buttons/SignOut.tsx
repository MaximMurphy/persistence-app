"use client";

import { signOut } from "next-auth/react";

export const SignOut = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="h-fit w-fit flex text-cream/75 rounded-md hover:underline hover:scale-105 transition ease-in-out duration-200"
    >
      <p>Sign Out</p>
    </button>
  );
};
