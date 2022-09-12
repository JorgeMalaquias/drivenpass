/*
  Warnings:

  - Added the required column `userId` to the `WiFis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WiFis" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "WiFis" ADD CONSTRAINT "WiFis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
