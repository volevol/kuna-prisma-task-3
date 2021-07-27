/*
  Warnings:

  - You are about to alter the column `fuel` on the `Auto` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Auto" ALTER COLUMN "brand" SET DATA TYPE TEXT,
ALTER COLUMN "fuel" SET DATA TYPE INTEGER,
ALTER COLUMN "model" SET DATA TYPE TEXT;
