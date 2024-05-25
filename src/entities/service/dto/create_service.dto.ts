export interface CreateServiceDTO{
    service_name : string,
    service_code :   string,
    planned_km   :   number,
    planned_fuel :   number
}

export interface CreatePlannedServiceDTO extends CreateServiceDTO{
  pickup_location : string,
  cust_req_number : number,
  pickup_time  :    Date
  id_tourist_group : number
}

export interface CreateSpecialServiceDTO extends CreateServiceDTO{
    start_date   :   Date,
    ending_date  :   Date,
    traveled_km  :   number,
    contract_number: number
}