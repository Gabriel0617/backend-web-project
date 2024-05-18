/*
  Warnings:

  - A unique constraint covering the columns `[brand_name]` on the table `bus_brand` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "bus_brand_brand_name_key" ON "bus_brand"("brand_name");
