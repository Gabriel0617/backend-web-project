import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServicePipe } from './service.pipe';
import { CreatePlannedServiceDTO, CreateServiceDTO, CreateSpecialServiceDTO } from './dto/create_service.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
@Controller('service')
export class ServiceController {
  constructor(
    private serviceService: ServiceService
  ) { }

  @Post()
  createService(@Body(new ServicePipe()) data: CreateServiceDTO) {
    if ('pickup_time' in data) {
      return this.serviceService.createPlannedService(data as CreatePlannedServiceDTO)
    } else {
      return this.serviceService.createSpecialService(data as CreateSpecialServiceDTO)
    }
  }

  @Get('planned')
  getAllPlannedServices() {
    return this.serviceService.findAllPlannedServices();
  }

  @Get(':name/plannedName')
  getPlannedServiceIdByName(@Param('name') service_name: string) {
    return this.serviceService.findPlannedServiceIdByName(service_name);
  }

  @Get(':id/plannedId')
  getPlannedServiceNameById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.findPlannedServiceNameById(id_service);
  }
  
  @Get(':name/specialName')
  getSpecialServiceIdByName(@Param('name') service_name: string) {
    return this.serviceService.findSpecialServiceIdByName(service_name);
  }

  @Get(':id/specialId')
  getSpecialServiceNameById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.findSpecialServiceNameById(id_service);
  }

  

  @Get('special')
  getAllSpecialServices() {

    return this.serviceService.findAllSpecialServices();
  }

  @Get('planned/names')
  getAllPlannedServicesNames() {
    return this.serviceService.findAllPlannedServicesNames();
  }

  @Get('special/names')
  getAllSpecialServicesNames() {
    return this.serviceService.findAllSpecialServicesNames();
  }

  @Get(':id')
  getServiceById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.findServiceById(id_service);
  }



  @Patch(':id')
  updateServiceById(@Param('id', ParseIntPipe) id_service: number, @Body() data: CreateServiceDTO) {
    if ('pickup_time' in data) {
      return this.serviceService.updatePlannedServiceById(id_service, data as CreatePlannedServiceDTO)
    } else {
      return this.serviceService.updateSpecialServiceById(id_service, data as CreateSpecialServiceDTO)
    }

  }
  @Delete(':id/planned')
  deletePlannedServiceById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.deletePlannedServiceById(id_service);
  }

  @Delete(':id/special')
  deleteSpecialServiceById(@Param('id', ParseIntPipe) id_service: number) {
    return this.serviceService.deleteSpecialServiceById(id_service);
  }


}
