/*
  Warnings:

  - A unique constraint covering the columns `[id_service]` on the table `service_performed` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "service_performed_id_service_key" ON "service_performed"("id_service");
