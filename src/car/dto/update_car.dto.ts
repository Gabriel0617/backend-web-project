import { IsOptional, IsString, isNumber } from "class-validator"

export interface UpdateCarDTO{
   
    fleet_number: number;

    license_car: string,
    brand_id: number
}