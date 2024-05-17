/*
  Warnings:

  - A unique constraint covering the columns `[customer_id_number]` on the table `customer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "customer_customer_id_number_key" ON "customer"("customer_id_number");
