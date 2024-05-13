import { Test, TestingModule } from '@nestjs/testing';
import { BusBrandService } from './bus_brand.service';

describe('BusBrandService', () => {
  let service: BusBrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusBrandService],
    }).compile();

    service = module.get<BusBrandService>(BusBrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
