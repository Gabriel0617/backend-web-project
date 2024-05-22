import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServicePipe } from './service.pipe';
import { CreatePlannedServiceDTO, CreateServiceDTO, CreateSpecialServiceDTO } from './dto/create_service.dto';

@Controller('service')
export class ServiceController {
    constructor(
        private serviceService: ServiceService
      ) { }
    
      @Post()
      createService(@Body(new ServicePipe()) data: CreateServiceDTO){
        if('pickup_time' in data){
        return this.serviceService.createPlannedService(data as CreatePlannedServiceDTO)
      }else{
        return this.serviceService.createSpecialService(data as CreateSpecialServiceDTO)
      }
    }
    
    @Get('planned')
    getAllPlannedServices(){
     return this.serviceService.findAllPlannedServices();
   }

   @Get('special')
   getAllSpecialServices(){
 
     return this.serviceService.findAllSpecialServices();
   }
    @Get(':id')
    getServiceById(@Param('id', ParseIntPipe)id_service :number){
      return this.serviceService.findServiceById(id_service);
    }

 
    
    @Patch(':id')
    updateServiceById(@Param('id', ParseIntPipe)id_service: number,@Body() data: CreateServiceDTO){
        if('pickup_time' in data){
            return this.serviceService.updatePlannedServiceById(id_service,data as CreatePlannedServiceDTO)
          }else{
            return this.serviceService.updateSpecialServiceById(id_service, data as CreateSpecialServiceDTO)
          }
 
    }
    @Delete(':id')
    deleteDriverById(@Param('id', ParseIntPipe)id_service: number,@Body() data: CreateServiceDTO){
      return this.serviceService.deleteServiceById(id_service);
    }


}
