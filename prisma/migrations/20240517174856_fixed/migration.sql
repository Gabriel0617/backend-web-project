/*
  Warnings:

  - You are about to drop the column `custormer_surnames` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the `_requestToservice` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id_service]` on the table `request` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customer_surnames` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_service` to the `request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_request` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_requestToservice" DROP CONSTRAINT "_requestToservice_A_fkey";

-- DropForeignKey
ALTER TABLE "_requestToservice" DROP CONSTRAINT "_requestToservice_B_fkey";

-- DropIndex
DROP INDEX "tourist_group_group_number_key";

-- AlterTable
ALTER TABLE "customer" DROP COLUMN "custormer_surnames",
ADD COLUMN     "customer_surnames" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "request" ADD COLUMN     "id_service" INTEGER NOT NULL;

-- AlterTable
CREATE SEQUENCE role_id_role_seq;
ALTER TABLE "role" ALTER COLUMN "id_role" SET DEFAULT nextval('role_id_role_seq');
ALTER SEQUENCE role_id_role_seq OWNED BY "role"."id_role";

-- AlterTable
ALTER TABLE "service" ADD COLUMN     "id_request" INTEGER NOT NULL;

-- AlterTable
CREATE SEQUENCE tourist_group_id_tourist_group_seq;
ALTER TABLE "tourist_group" ALTER COLUMN "id_tourist_group" SET DEFAULT nextval('tourist_group_id_tourist_group_seq');
ALTER SEQUENCE tourist_group_id_tourist_group_seq OWNED BY "tourist_group"."id_tourist_group";

-- DropTable
DROP TABLE "_requestToservice";

-- CreateIndex
CREATE UNIQUE INDEX "request_id_service_key" ON "request"("id_service");

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "service"("id_service") ON DELETE RESTRICT ON UPDATE CASCADE;
