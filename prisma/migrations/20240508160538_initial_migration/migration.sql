-- CreateTable
CREATE TABLE "BusBrand" (
    "id_brand" SERIAL NOT NULL,
    "chairs_count" INTEGER NOT NULL,

    CONSTRAINT "BusBrand_pkey" PRIMARY KEY ("id_brand")
);

-- CreateTable
CREATE TABLE "Car" (
    "id_car" SERIAL NOT NULL,
    "brand_id" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id_car")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id_customer" SERIAL NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id_customer")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id_driver" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "driver_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "driver_type" TEXT NOT NULL,
    "driver_dni" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id_driver")
);

-- CreateTable
CREATE TABLE "_CarToCustomer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "BusBrand_chairs_count_key" ON "BusBrand"("chairs_count");

-- CreateIndex
CREATE UNIQUE INDEX "_CarToCustomer_AB_unique" ON "_CarToCustomer"("A", "B");

-- CreateIndex
CREATE INDEX "_CarToCustomer_B_index" ON "_CarToCustomer"("B");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "BusBrand"("id_brand") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "_CarToCustomer" ADD CONSTRAINT "_CarToCustomer_A_fkey" FOREIGN KEY ("A") REFERENCES "Car"("id_car") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToCustomer" ADD CONSTRAINT "_CarToCustomer_B_fkey" FOREIGN KEY ("B") REFERENCES "Customer"("id_customer") ON DELETE CASCADE ON UPDATE CASCADE;
