/*
  Warnings:

  - A unique constraint covering the columns `[license_car]` on the table `car` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "car_license_car_key" ON "car"("license_car");
