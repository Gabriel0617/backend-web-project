/*
  Warnings:

  - You are about to drop the column `id_request` on the `planned_service` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_tourist_group]` on the table `planned_service` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "planned_service" DROP COLUMN "id_request";

-- CreateIndex
CREATE UNIQUE INDEX "planned_service_id_tourist_group_key" ON "planned_service"("id_tourist_group");

-- AddForeignKey
ALTER TABLE "planned_service" ADD CONSTRAINT "planned_service_id_tourist_group_fkey" FOREIGN KEY ("id_tourist_group") REFERENCES "tourist_group"("id_tourist_group") ON DELETE RESTRICT ON UPDATE CASCADE;
