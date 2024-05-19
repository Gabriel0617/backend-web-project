-- CreateTable
CREATE TABLE "service_performed" (
    "id_service_performed" SERIAL NOT NULL,
    "id_service" INTEGER NOT NULL,
    "id_tourist_group" INTEGER NOT NULL,

    CONSTRAINT "service_performed_pkey" PRIMARY KEY ("id_service_performed")
);

-- CreateIndex
CREATE UNIQUE INDEX "service_performed_id_tourist_group_key" ON "service_performed"("id_tourist_group");

-- AddForeignKey
ALTER TABLE "service_performed" ADD CONSTRAINT "service_performed_id_tourist_group_fkey" FOREIGN KEY ("id_tourist_group") REFERENCES "tourist_group"("id_tourist_group") ON DELETE CASCADE ON UPDATE CASCADE;
