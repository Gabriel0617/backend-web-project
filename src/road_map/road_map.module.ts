import { Module } from '@nestjs/common';
import { RoadMapService } from './road_map.service';
import { RoadMapController } from './road_map.controller';

@Module({
  providers: [RoadMapService],
  controllers: [RoadMapController]
})
export class RoadMapModule {}
