/*
  Warnings:

  - You are about to drop the column `type` on the `driver` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "permanent_driver" DROP CONSTRAINT "permanent_driver_id_driver_fkey";

-- DropForeignKey
ALTER TABLE "reserve_driver" DROP CONSTRAINT "reserve_driver_id_driver_fkey";

-- AlterTable
ALTER TABLE "driver" DROP COLUMN "type";

-- AlterTable
ALTER TABLE "permanent_driver" ALTER COLUMN "id_driver" DROP DEFAULT;
DROP SEQUENCE "permanent_driver_id_driver_seq";

-- AlterTable
ALTER TABLE "reserve_driver" ALTER COLUMN "id_driver" DROP DEFAULT;
DROP SEQUENCE "reserve_driver_id_driver_seq";

-- DropEnum
DROP TYPE "driver_type";
