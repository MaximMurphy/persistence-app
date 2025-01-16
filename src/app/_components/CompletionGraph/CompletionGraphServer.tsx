import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import CompletionGraph from "./CompletionGraph";
import { authOptions } from "@/lib/auth";

export default async function CompletionGraphServer() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  const year = new Date().getUTCFullYear();
  const startDate = new Date(Date.UTC(year, 0, 1));
  const endDate = new Date(Date.UTC(year, 11, 31));

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

  //console.log(completions);

  return <CompletionGraph year={year} existingCompletions={completions} />;
}
