/*
  Warnings:

  - You are about to drop the column `address` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `district` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `driver_dni` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `driver_name` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `driver_type` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `Driver` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "address",
DROP COLUMN "district",
DROP COLUMN "driver_dni",
DROP COLUMN "driver_name",
DROP COLUMN "driver_type",
DROP COLUMN "phone_number";
