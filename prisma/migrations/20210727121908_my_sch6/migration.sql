-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "address" TEXT NOT NULL DEFAULT E'none',
ADD COLUMN     "delivery" TEXT NOT NULL DEFAULT E'pick up',
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "payment" TEXT NOT NULL DEFAULT E'cash',
ADD PRIMARY KEY ("id");
