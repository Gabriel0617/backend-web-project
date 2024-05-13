/*
  Warnings:

  - You are about to alter the column `fuel_consumption` on the `bus_brand` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "bus_brand" ALTER COLUMN "fuel_consumption" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
CREATE SEQUENCE user_id_user_seq;
ALTER TABLE "user" ALTER COLUMN "id_user" SET DEFAULT nextval('user_id_user_seq');
ALTER SEQUENCE user_id_user_seq OWNED BY "user"."id_user";
