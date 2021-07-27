/*
  Warnings:

  - You are about to drop the column `fuel` on the `Auto` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Auto` table. All the data in the column will be lost.
  - Added the required column `cost` to the `Auto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuelLiter` to the `Auto` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Auto.name_unique";

-- AlterTable
ALTER TABLE "Auto" DROP COLUMN "fuel",
DROP COLUMN "name",
ADD COLUMN     "cost" INTEGER NOT NULL,
ADD COLUMN     "fuelLiter" INTEGER NOT NULL;
