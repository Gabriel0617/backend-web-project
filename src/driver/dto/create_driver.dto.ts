export interface CreateDriverDTO {
    district: string,
    driver_name: string,
    address: string
    phone_number: string,
    driver_dni: string
   
}

export interface CreatePermanentDriverDTO extends CreateDriverDTO{
    id_car: number
}

export interface CreateReserverDriverDTO extends CreateDriverDTO{
    id_brand: number
}

