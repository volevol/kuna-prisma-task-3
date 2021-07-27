/*
  Warnings:

  - You are about to drop the column `cooldown` on the `Auto` table. All the data in the column will be lost.
  - You are about to drop the column `damage` on the `Auto` table. All the data in the column will be lost.
  - You are about to drop the column `manaCost` on the `Auto` table. All the data in the column will be lost.
  - Added the required column `brand` to the `Auto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuel` to the `Auto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Auto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Auto" DROP COLUMN "cooldown",
DROP COLUMN "damage",
DROP COLUMN "manaCost",
ADD COLUMN     "brand" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "fuel" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "model" DECIMAL(65,30) NOT NULL;
