/*
  Warnings:

  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlayerSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlayerStat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlayerWeapon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Weapon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PlayerSkill" DROP CONSTRAINT "PlayerSkill_playerId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerSkill" DROP CONSTRAINT "PlayerSkill_skillId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerStat" DROP CONSTRAINT "PlayerStat_playerId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerWeapon" DROP CONSTRAINT "PlayerWeapon_playerId_fkey";

-- DropForeignKey
ALTER TABLE "PlayerWeapon" DROP CONSTRAINT "PlayerWeapon_weaponId_fkey";

-- DropTable
DROP TABLE "Player";

-- DropTable
DROP TABLE "PlayerSkill";

-- DropTable
DROP TABLE "PlayerStat";

-- DropTable
DROP TABLE "PlayerWeapon";

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "Weapon";

-- CreateTable
CREATE TABLE "Auto" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "damage" DECIMAL(65,30) NOT NULL,
    "cooldown" DECIMAL(65,30) NOT NULL,
    "manaCost" DECIMAL(65,30) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "userId" INTEGER NOT NULL,
    "autoId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Auto.name_unique" ON "Auto"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Order.userId_autoId_unique" ON "Order"("userId", "autoId");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("autoId") REFERENCES "Auto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
