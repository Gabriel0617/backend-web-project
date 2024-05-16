/*
  Warnings:

  - Added the required column `brand_name` to the `bus_brand` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bus_brand" ADD COLUMN     "brand_name" TEXT NOT NULL;
