/*
  Warnings:

  - You are about to drop the `reserve_driver` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "reserve_driver" DROP CONSTRAINT "reserve_driver_id_brand_fkey";

-- DropTable
DROP TABLE "reserve_driver";

-- CreateTable
CREATE TABLE "reserver_driver" (
    "id_driver" INTEGER NOT NULL,
    "id_brand" INTEGER NOT NULL,

    CONSTRAINT "reserver_driver_pkey" PRIMARY KEY ("id_driver")
);

-- AddForeignKey
ALTER TABLE "reserver_driver" ADD CONSTRAINT "reserver_driver_id_brand_fkey" FOREIGN KEY ("id_brand") REFERENCES "bus_brand"("id_brand") ON DELETE CASCADE ON UPDATE CASCADE;
