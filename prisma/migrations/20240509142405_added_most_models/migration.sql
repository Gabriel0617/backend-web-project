/*
  Warnings:

  - A unique constraint covering the columns `[license_car]` on the table `car` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[driver_dni]` on the table `driver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fleet_number` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `license_car` to the `car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_country` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_name` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `custormer_surnames` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_brand_id_fkey";

-- AlterTable
ALTER TABLE "car" ADD COLUMN     "fleet_number" INTEGER NOT NULL,
ADD COLUMN     "license_car" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "customer" ADD COLUMN     "customer_country" TEXT NOT NULL,
ADD COLUMN     "customer_name" TEXT NOT NULL,
ADD COLUMN     "custormer_surnames" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "request" (
    "id_request" INTEGER NOT NULL,
    "id_car" INTEGER NOT NULL,
    "id_customer" INTEGER NOT NULL,

    CONSTRAINT "request_pkey" PRIMARY KEY ("id_request")
);

-- CreateTable
CREATE TABLE "road_map" (
    "id_road_map" INTEGER NOT NULL,
    "road_map_number" TEXT NOT NULL,
    "traveled_km" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "id_car" INTEGER NOT NULL,

    CONSTRAINT "road_map_pkey" PRIMARY KEY ("id_road_map")
);

-- CreateTable
CREATE TABLE "role" (
    "id_role" INTEGER NOT NULL,
    "role_name" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id_role")
);

-- CreateTable
CREATE TABLE "service" (
    "id_service" INTEGER NOT NULL,
    "service_name" TEXT NOT NULL,
    "planned_km" DECIMAL(65,30) NOT NULL,
    "planned_fuel" DECIMAL(65,30) NOT NULL,
    "service_code" TEXT NOT NULL,
    "service_type" TEXT NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id_service")
);

-- CreateTable
CREATE TABLE "tourist_group" (
    "id_tourist_group" INTEGER NOT NULL,
    "group_country" TEXT NOT NULL,
    "passengers_count" INTEGER NOT NULL,
    "group_number" INTEGER NOT NULL,

    CONSTRAINT "tourist_group_pkey" PRIMARY KEY ("id_tourist_group")
);

-- CreateTable
CREATE TABLE "user" (
    "id_user" INTEGER NOT NULL,
    "user_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "id_role" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "_requestToservice" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "road_map_road_map_number_key" ON "road_map"("road_map_number");

-- CreateIndex
CREATE UNIQUE INDEX "tourist_group_group_number_key" ON "tourist_group"("group_number");

-- CreateIndex
CREATE UNIQUE INDEX "_requestToservice_AB_unique" ON "_requestToservice"("A", "B");

-- CreateIndex
CREATE INDEX "_requestToservice_B_index" ON "_requestToservice"("B");

-- CreateIndex
CREATE UNIQUE INDEX "car_license_car_key" ON "car"("license_car");

-- CreateIndex
CREATE UNIQUE INDEX "driver_driver_dni_key" ON "driver"("driver_dni");

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "bus_brand"("id_brand") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_id_car_fkey" FOREIGN KEY ("id_car") REFERENCES "car"("id_car") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_id_customer_fkey" FOREIGN KEY ("id_customer") REFERENCES "customer"("id_customer") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "road_map" ADD CONSTRAINT "road_map_id_car_fkey" FOREIGN KEY ("id_car") REFERENCES "car"("id_car") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "role"("id_role") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_requestToservice" ADD CONSTRAINT "_requestToservice_A_fkey" FOREIGN KEY ("A") REFERENCES "request"("id_request") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_requestToservice" ADD CONSTRAINT "_requestToservice_B_fkey" FOREIGN KEY ("B") REFERENCES "service"("id_service") ON DELETE CASCADE ON UPDATE CASCADE;
