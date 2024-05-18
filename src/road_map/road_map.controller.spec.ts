import { Test, TestingModule } from '@nestjs/testing';
import { RoadMapController } from './road_map.controller';

describe('RoadMapController', () => {
  let controller: RoadMapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoadMapController],
    }).compile();

    controller = module.get<RoadMapController>(RoadMapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
