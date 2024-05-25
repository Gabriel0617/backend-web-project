/*
  Warnings:

  - Changed the type of `contract_number` on the `special_service` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "special_service" DROP COLUMN "contract_number",
ADD COLUMN     "contract_number" INTEGER NOT NULL;
