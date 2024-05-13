/*
  Warnings:

  - Added the required column `type` to the `driver` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `service_type` on the `service` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "driver_type" AS ENUM ('permanent_driver', 'reserve_driver');

-- CreateEnum
CREATE TYPE "service_type" AS ENUM ('planned_service', 'special_service');

-- AlterTable
ALTER TABLE "driver" ADD COLUMN     "type" "driver_type" NOT NULL;

-- AlterTable
ALTER TABLE "service" DROP COLUMN "service_type",
ADD COLUMN     "service_type" "service_type" NOT NULL;

-- CreateTable
CREATE TABLE "permanent_driver" (
    "id_driver" INTEGER NOT NULL,
    "id_car" INTEGER NOT NULL,

    CONSTRAINT "permanent_driver_pkey" PRIMARY KEY ("id_driver")
);

-- CreateTable
CREATE TABLE "reserve_driver" (
    "id_driver" INTEGER NOT NULL,
    "id_brand" INTEGER NOT NULL,

    CONSTRAINT "reserve_driver_pkey" PRIMARY KEY ("id_driver")
);

-- CreateTable
CREATE TABLE "planned_service" (
    "id_service" INTEGER NOT NULL,
    "cust_req_number" INTEGER NOT NULL,
    "pickup_location" TEXT NOT NULL,
    "pickud_time" TIMESTAMP(3) NOT NULL,
    "id_tourist_group" INTEGER NOT NULL,

    CONSTRAINT "planned_service_pkey" PRIMARY KEY ("id_service")
);

-- CreateTable
CREATE TABLE "special_service" (
    "id_service" INTEGER NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "ending_date" TIMESTAMP(3) NOT NULL,
    "traveled_km" DECIMAL(65,30) NOT NULL,
    "contract_number" TEXT NOT NULL,

    CONSTRAINT "special_service_pkey" PRIMARY KEY ("id_service")
);

-- AddForeignKey
ALTER TABLE "permanent_driver" ADD CONSTRAINT "permanent_driver_id_driver_fkey" FOREIGN KEY ("id_driver") REFERENCES "driver"("id_driver") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "permanent_driver" ADD CONSTRAINT "permanent_driver_id_car_fkey" FOREIGN KEY ("id_car") REFERENCES "car"("id_car") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserve_driver" ADD CONSTRAINT "reserve_driver_id_brand_fkey" FOREIGN KEY ("id_brand") REFERENCES "bus_brand"("id_brand") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reserve_driver" ADD CONSTRAINT "reserve_driver_id_driver_fkey" FOREIGN KEY ("id_driver") REFERENCES "driver"("id_driver") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planned_service" ADD CONSTRAINT "planned_service_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "service"("id_service") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "special_service" ADD CONSTRAINT "special_service_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "service"("id_service") ON DELETE RESTRICT ON UPDATE CASCADE;
