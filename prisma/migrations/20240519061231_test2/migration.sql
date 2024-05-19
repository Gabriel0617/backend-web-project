/*
  Warnings:

  - A unique constraint covering the columns `[group_number]` on the table `tourist_group` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tourist_group_group_number_key" ON "tourist_group"("group_number");
