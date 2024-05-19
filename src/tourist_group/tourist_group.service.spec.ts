import { Test, TestingModule } from '@nestjs/testing';
import { TouristGroupService } from './tourist_group.service';

describe('TouristGroupService', () => {
  let service: TouristGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TouristGroupService],
    }).compile();

    service = module.get<TouristGroupService>(TouristGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
