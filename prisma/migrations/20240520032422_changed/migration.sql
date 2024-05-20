/*
  Warnings:

  - You are about to drop the column `customer_id_number` on the `customer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[customer_number]` on the table `customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customer_number` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "customer_customer_id_number_key";

-- AlterTable
ALTER TABLE "customer" DROP COLUMN "customer_id_number",
ADD COLUMN     "customer_number" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customer_customer_number_key" ON "customer"("customer_number");
