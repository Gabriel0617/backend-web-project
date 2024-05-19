import { Test, TestingModule } from '@nestjs/testing';
import { ServicePerformedService } from './service_performed.service';

describe('ServicePerformedService', () => {
  let service: ServicePerformedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicePerformedService],
    }).compile();

    service = module.get<ServicePerformedService>(ServicePerformedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
