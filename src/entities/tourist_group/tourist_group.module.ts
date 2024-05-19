import { Module } from '@nestjs/common';
import { TouristGroupController } from './tourist_group.controller';
import { TouristGroupService } from './tourist_group.service';


@Module({
  controllers: [TouristGroupController],
  providers: [TouristGroupService]
})
export class TouristGroupModule {}
