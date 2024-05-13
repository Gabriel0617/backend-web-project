import { car, reserve_driver } from "@prisma/client";


export interface CreateBusBrandDTO{
    chairs_count: number,
    fuel_type: string,
    fuel_consumption: number,
    brand_cars: car[],
    reserve_drivers: reserve_driver[]
}