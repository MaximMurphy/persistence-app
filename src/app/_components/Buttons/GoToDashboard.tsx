import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function GoToDashboard() {
  const session = await getServerSession();
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