import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlannedServiceDTO, CreateServiceDTO, CreateSpecialServiceDTO } from './dto/create_service.dto';

@Injectable()
export class ServiceService {
    constructor(private prismaService: PrismaService) { }

    async createService(data: CreateServiceDTO) {
        return this.prismaService.service.create({
            data
        })
    }

    async createPlannedService(data: CreatePlannedServiceDTO) {
        const { pickup_location, cust_req_number, pickup_time, id_tourist_group, ...serviceData } = data;
        const new_service = await this.createService(serviceData);

        return this.prismaService.planned_service.create({
            data: {
                id_service: new_service.id_service,
                pickup_location,
                cust_req_number,
                pickup_time,
                id_tourist_group
            }
        })
    }

    async createSpecialService(data: CreateSpecialServiceDTO) {
        const { start_date, ending_date, traveled_km, contract_number, ...serviceData } = data;
        const new_service = await this.createService(serviceData);

        return this.prismaService.special_service.create({
            data: {
                id_service: new_service.id_service,
                contract_number,
                start_date,
                ending_date,
                traveled_km
            }
        })
    }

    async deleteServiceById(id_service) {
        return this.prismaService.service.delete({ where: { id_service } });
    }

    async deletePlannedServiceById(id_service) {
        this.prismaService.service.delete({ where: { id_service } });
        return this.prismaService.planned_service.delete({ where: { id_service } });
    }

    async deleteSpecialServiceById(id_service) {
        this.prismaService.service.delete({ where: { id_service } });
        return this.prismaService.special_service.delete({ where: { id_service } });
    }

    async findServiceById(id_service: number) {


        const service = await this.prismaService.service.findUnique({ where: { id_service } });

        let additionalAttributes = {};
        const exists_planned = await this.prismaService.planned_service.findUnique({ where: { id_service } });
        const exists_special = await this.prismaService.special_service.findUnique({ where: { id_service } });
        if (exists_planned) {


            const { id_service, ...planned_service_attributes } = exists_planned
            additionalAttributes =  planned_service_attributes ;


        } else if (exists_special) {

            const { id_service, ...special_service_attributes } = exists_special
            additionalAttributes =  special_service_attributes ;
        }

        return {
            ...service,
            ...additionalAttributes,
        };
    }

    async updatePlannedServiceById(id_service: number, data: CreatePlannedServiceDTO) {
        const findPlannedService = await this.findServiceById(id_service);
        if (!findPlannedService) throw new HttpException('Planned Service Not Found', 404);
        const { pickup_location, cust_req_number, pickup_time, id_tourist_group, ...serviceData } = data;
        await this.prismaService.service.update({ where: { id_service }, data: serviceData });

        return this.prismaService.planned_service.update({ where: { id_service }, data: { 
            cust_req_number,id_tourist_group,pickup_location,pickup_time
         } })
    }

    async updateSpecialServiceById(id_service: number, data: CreateSpecialServiceDTO) {
        const findPlannedService = await this.findServiceById(id_service);
        if (!findPlannedService) throw new HttpException('Special Service Not Found', 404);
        const { start_date, ending_date, traveled_km, contract_number, ...serviceData } = data;
        await this.prismaService.service.update({ where: { id_service }, data: serviceData });

        return this.prismaService.special_service.update({ where: { id_service }, data: { 
            start_date, ending_date, traveled_km, contract_number
         } })
    }


    async findAllSpecialServices(){
        const special_services_ids = await this.prismaService.special_service.findMany({select: {id_service: true}});

        const complete_special_services = [];
        


        for(let i = 0; i < special_services_ids.length; i++){
     
            
            complete_special_services.push(await this.findServiceById(special_services_ids[i].id_service))
           
        }
        return complete_special_services;
    }

    async findAllSpecialServicesNames(){
        const specialServices = await this.findAllSpecialServices();
 
        const specialServicesNames = specialServices.map(service => ({
         id_service : service.id_service,
         service_name: service.service_name
       }));
 
       return specialServicesNames;
     }

    async findAllPlannedServices(){
        const planned_services_ids = await this.prismaService.planned_service.findMany({select: {id_service: true}});
        const complete_planned_services = [];
        


        for(let i = 0; i < planned_services_ids.length; i++){
            complete_planned_services.push(await this.findServiceById(planned_services_ids[i].id_service))
        }
        return complete_planned_services;
    }

    async findAllPlannedServicesNames(){
       const plannedServices = await this.findAllPlannedServices();

       const plannedServicesNames = plannedServices.map(service => ({
        id_service : service.id_service,
        service_name: service.service_name
      }));

      return plannedServicesNames;
    }

    async findPlannedServiceNameById(id_service : number){
        const service_name = this.prismaService.service.findUnique({where: {id_service}, select : {service_name : true}});
        const planned_service = this.prismaService.planned_service.findUnique({where: {id_service}});
        if(service_name && planned_service ){
            return service_name
        }
    }

    async findPlannedServiceIdByName(service_name : string){
        const {id_service} =  await this.prismaService.service.findUnique({where: {service_name}, select : {id_service : true}});
        const planned_service = this.prismaService.planned_service.findUnique({where: {id_service}});
        if(id_service && planned_service ){
            return id_service 
        }
    }

    async findSpecialServiceNameById(id_service : number){
        const service_name = this.prismaService.service.findUnique({where: {id_service}, select : {service_name : true}});
        const special_service = this.prismaService.special_service.findUnique({where: {id_service}});
        if(service_name && special_service ){
            return service_name
        }
    }

    async findSpecialServiceIdByName(service_name : string){
        const {id_service} =  await this.prismaService.service.findUnique({where: {service_name}, select : {id_service : true}});
        const special_service = this.prismaService.special_service.findUnique({where: {id_service}});
        if(id_service && special_service ){
            return id_service 
        }
    }
}
