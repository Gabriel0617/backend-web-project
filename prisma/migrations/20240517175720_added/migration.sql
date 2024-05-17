/*
  Warnings:

  - Added the required column `customer_id_number` to the `customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "customer" ADD COLUMN     "customer_id_number" TEXT NOT NULL;
