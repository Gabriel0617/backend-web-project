/*
  Warnings:

  - You are about to drop the column `driver_type` on the `driver` table. All the data in the column will be lost.
  - You are about to drop the column `pickud_time` on the `planned_service` table. All the data in the column will be lost.
  - You are about to drop the column `id_request` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `service_type` on the `service` table. All the data in the column will be lost.
  - Added the required column `id_request` to the `planned_service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickup_time` to the `planned_service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "planned_service" DROP CONSTRAINT "planned_service_id_service_fkey";

-- DropForeignKey
ALTER TABLE "request" DROP CONSTRAINT "request_id_service_fkey";

-- DropForeignKey
ALTER TABLE "special_service" DROP CONSTRAINT "special_service_id_service_fkey";

-- AlterTable
ALTER TABLE "driver" DROP COLUMN "driver_type";

-- AlterTable
ALTER TABLE "planned_service" DROP COLUMN "pickud_time",
ADD COLUMN     "id_request" INTEGER NOT NULL,
ADD COLUMN     "pickup_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "service" DROP COLUMN "id_request",
DROP COLUMN "service_type";

-- DropEnum
DROP TYPE "service_type";

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "special_service"("id_service") ON DELETE RESTRICT ON UPDATE CASCADE;
