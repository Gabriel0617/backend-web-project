/*
  Warnings:

  - You are about to drop the column `id_tourist_group` on the `service_performed` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_road_map]` on the table `service_performed` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_road_map` to the `service_performed` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "service_performed" DROP CONSTRAINT "service_performed_id_tourist_group_fkey";

-- DropIndex
DROP INDEX "service_performed_id_tourist_group_key";

-- AlterTable
ALTER TABLE "service_performed" DROP COLUMN "id_tourist_group",
ADD COLUMN     "id_road_map" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "service_performed_id_road_map_key" ON "service_performed"("id_road_map");

-- AddForeignKey
ALTER TABLE "service_performed" ADD CONSTRAINT "service_performed_id_road_map_fkey" FOREIGN KEY ("id_road_map") REFERENCES "road_map"("id_road_map") ON DELETE CASCADE ON UPDATE CASCADE;
