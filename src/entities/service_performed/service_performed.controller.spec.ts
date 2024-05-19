import { Test, TestingModule } from '@nestjs/testing';
import { ServicePerformedController } from './service_performed.controller';

describe('ServicePerformedController', () => {
  let controller: ServicePerformedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicePerformedController],
    }).compile();

    controller = module.get<ServicePerformedController>(ServicePerformedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
