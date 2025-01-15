-- CreateTable
CREATE TABLE "DailyCompletion" (
    "id" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "completionPercentage" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DailyCompletion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyCompletion_userId_date_key" ON "DailyCompletion"("userId", "date");

-- AddForeignKey
ALTER TABLE "DailyCompletion" ADD CONSTRAINT "DailyCompletion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
