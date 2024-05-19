import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RequestPipe } from './request.pipe';
import { CreateRequestDTO } from './dto/create_request.dto';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
    constructor(
        private requestService: RequestService
      ) { }

      @Post()
  createRequest(@Body(new RequestPipe()) data: CreateRequestDTO){
   
    
    return this.requestService.createRequest(data)
  }

  @Get()
  getAllRequest(){
    return this.requestService.findRequests();
  }

  @Get(':id')
  getRequestById(@Param('id', ParseIntPipe)id_request:number){
    return this.requestService.findRequestById(id_request);
  }

 

  @Delete(':id')
  deleteRequestById(@Param('id', ParseIntPipe)id_request:number){
    return this.requestService.deleteRequestById(id_request);
  }

  @Patch(':id')
  updateRequestById(@Param('id', ParseIntPipe)id_request: number,@Body() data: CreateRequestDTO){
    this.requestService.updateRequestById(id_request, data)   
}
}
