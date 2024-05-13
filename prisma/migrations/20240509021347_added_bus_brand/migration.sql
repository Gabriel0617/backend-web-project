/*
  Warnings:

  - You are about to drop the `BusBrand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Car` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Customer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CarToCustomer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "_CarToCustomer" DROP CONSTRAINT "_CarToCustomer_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarToCustomer" DROP CONSTRAINT "_CarToCustomer_B_fkey";

-- DropTable
DROP TABLE "BusBrand";

-- DropTable
DROP TABLE "Car";

-- DropTable
DROP TABLE "Customer";

-- DropTable
DROP TABLE "Driver";

-- DropTable
DROP TABLE "_CarToCustomer";

-- CreateTable
CREATE TABLE "bus_brand" (
    "id_brand" SERIAL NOT NULL,
    "chairs_count" INTEGER NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "fuel_consumption" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "bus_brand_pkey" PRIMARY KEY ("id_brand")
);

-- CreateTable
CREATE TABLE "car" (
    "id_car" SERIAL NOT NULL,
    "brand_id" INTEGER NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id_car")
);

-- CreateTable
CREATE TABLE "customer" (
    "id_customer" SERIAL NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id_customer")
);

-- CreateTable
CREATE TABLE "driver" (
    "id_driver" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "driver_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "driver_type" TEXT NOT NULL,
    "driver_dni" TEXT NOT NULL,

    CONSTRAINT "driver_pkey" PRIMARY KEY ("id_driver")
);

-- CreateTable
CREATE TABLE "_carTocustomer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_carTocustomer_AB_unique" ON "_carTocustomer"("A", "B");

-- CreateIndex
CREATE INDEX "_carTocustomer_B_index" ON "_carTocustomer"("B");

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "bus_brand"("id_brand") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "_carTocustomer" ADD CONSTRAINT "_carTocustomer_A_fkey" FOREIGN KEY ("A") REFERENCES "car"("id_car") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_carTocustomer" ADD CONSTRAINT "_carTocustomer_B_fkey" FOREIGN KEY ("B") REFERENCES "customer"("id_customer") ON DELETE CASCADE ON UPDATE CASCADE;
