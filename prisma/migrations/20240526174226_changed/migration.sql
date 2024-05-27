/*
  Warnings:

  - You are about to drop the column `id_role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_role` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_id_role_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "id_role",
ADD COLUMN     "user_role" TEXT NOT NULL;

-- DropTable
DROP TABLE "role";
