-- AlterTable
CREATE SEQUENCE driver_id_driver_seq;
ALTER TABLE "driver" ALTER COLUMN "id_driver" SET DEFAULT nextval('driver_id_driver_seq');
ALTER SEQUENCE driver_id_driver_seq OWNED BY "driver"."id_driver";
