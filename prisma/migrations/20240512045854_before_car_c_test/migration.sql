-- AlterTable
CREATE SEQUENCE permanent_driver_id_driver_seq;
ALTER TABLE "permanent_driver" ALTER COLUMN "id_driver" SET DEFAULT nextval('permanent_driver_id_driver_seq');
ALTER SEQUENCE permanent_driver_id_driver_seq OWNED BY "permanent_driver"."id_driver";

-- AlterTable
CREATE SEQUENCE request_id_request_seq;
ALTER TABLE "request" ALTER COLUMN "id_request" SET DEFAULT nextval('request_id_request_seq');
ALTER SEQUENCE request_id_request_seq OWNED BY "request"."id_request";

-- AlterTable
CREATE SEQUENCE reserve_driver_id_driver_seq;
ALTER TABLE "reserve_driver" ALTER COLUMN "id_driver" SET DEFAULT nextval('reserve_driver_id_driver_seq');
ALTER SEQUENCE reserve_driver_id_driver_seq OWNED BY "reserve_driver"."id_driver";

-- AlterTable
CREATE SEQUENCE road_map_id_road_map_seq;
ALTER TABLE "road_map" ALTER COLUMN "id_road_map" SET DEFAULT nextval('road_map_id_road_map_seq');
ALTER SEQUENCE road_map_id_road_map_seq OWNED BY "road_map"."id_road_map";

-- AlterTable
CREATE SEQUENCE service_id_service_seq;
ALTER TABLE "service" ALTER COLUMN "id_service" SET DEFAULT nextval('service_id_service_seq');
ALTER SEQUENCE service_id_service_seq OWNED BY "service"."id_service";
