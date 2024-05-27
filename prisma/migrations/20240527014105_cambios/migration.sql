/*
  Warnings:

  - Added the required column `id_request` to the `special_service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "request" DROP CONSTRAINT "request_id_service_fkey";

-- DropIndex
DROP INDEX "request_id_service_key";

-- DropIndex
DROP INDEX "service_performed_id_road_map_key";

-- DropIndex
DROP INDEX "service_performed_id_service_key";

-- AlterTable
ALTER TABLE "special_service" ADD COLUMN     "id_request" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "special_service"("id_service") ON DELETE CASCADE ON UPDATE CASCADE;
