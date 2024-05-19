import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ServicePerformedPipe } from './service_performed.pipe';
import { CreateServicePerformedDTO } from './dto/create_service_performed.dto';
import { service } from '@prisma/client';
import { ServicePerformedService } from './service_performed.service';

@Controller('service-performed')
export class ServicePerformedController {
    constructor(
        private servicePerformedService: ServicePerformedService
      ) { }

      @Post()
  createServicePerformed(@Body(new ServicePerformedPipe()) data: CreateServicePerformedDTO){
   
    
    return this.servicePerformedService.createServicePerformed(data)
  }

  @Get()
  getAllServicesPerformed(){
    return this.servicePerformedService.findServicesPerformed();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe)id_service_performed :number){
    return this.servicePerformedService.findServicePerformedById(id_service_performed);
  }

 

  @Delete(':id')
  deleteServicePerformedById(@Param('id', ParseIntPipe)id_service_performed:number){
    return this.servicePerformedService.deleteServicePerformedById(id_service_performed);
  }

  @Patch(':id')
  updateServicePerformedById(@Param('id', ParseIntPipe)id_service_performed: number,@Body() data: CreateServicePerformedDTO){
    this.servicePerformedService.updateServicePerformedById(id_service_performed, data)
  }

}
