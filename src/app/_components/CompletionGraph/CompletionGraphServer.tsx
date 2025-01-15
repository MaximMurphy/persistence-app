import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import CompletionGraph from "./CompletionGraph";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function CompletionGraphServer() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  const year = new Date().getFullYear();
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);

  const completions = userEmail
    ? await prisma.dailyCompletion.findMany({
        where: {
          user: {
            email: userEmail,
          },
          date: {
            gte: startDate,
            lte: endDate,
          },
        },
        orderBy: {
          date: "asc",
        },
      })
    : [];

  return <CompletionGraph year={year} existingCompletions={completions} />;
}
