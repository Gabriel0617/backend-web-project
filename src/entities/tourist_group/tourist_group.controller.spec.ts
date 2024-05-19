import { Test, TestingModule } from '@nestjs/testing';
import { TouristGroupController } from './tourist_group.controller';

describe('TouristGroupController', () => {
  let controller: TouristGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TouristGroupController],
    }).compile();

    controller = module.get<TouristGroupController>(TouristGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
