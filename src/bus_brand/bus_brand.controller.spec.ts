import { Test, TestingModule } from '@nestjs/testing';
import { BusBrandController } from './bus_brand.controller';

describe('BusBrandController', () => {
  let controller: BusBrandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusBrandController],
    }).compile();

    controller = module.get<BusBrandController>(BusBrandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
