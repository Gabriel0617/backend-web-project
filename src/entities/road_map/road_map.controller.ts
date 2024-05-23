import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RoadMapService } from './road_map.service';
import { RoadMapPipe } from './road_map.pipe';
import { createRoadMapDTO } from './dto/create_road_map.dto';


@Controller('road-map')
export class RoadMapController {
    constructor(
        private roadMapService: RoadMapService
      ) { }

      @Post()
  createRoadMap(@Body(new RoadMapPipe()) data: createRoadMapDTO){
   
    
    return this.roadMapService.createRoadMap(data)
  }

  @Get()
  getAllRoadMaps(){
    return this.roadMapService.findRoadMaps();
  }

  @Get('AllNumbers')
  getAllRoadMapNumbers(){
    return this.getAllRoadMapNumbers();
  }

  @Get(':id')
  getRoadMapById(@Param('id', ParseIntPipe)id_road_map:number){
    return this.roadMapService.findRoadMapById(id_road_map);
  }

 

  @Delete(':id')
  deleteRoadMapById(@Param('id', ParseIntPipe)id_road_map:number){
    return this.roadMapService.deleteRoadMapById(id_road_map);
  }

  @Patch(':id')
  updateRoadMapById(@Param('id', ParseIntPipe)id_road_map: number,@Body() data: createRoadMapDTO){
    this.roadMapService.updateRoadMapById(id_road_map, data)
  }

  

}
