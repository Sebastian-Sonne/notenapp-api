import { Test, TestingModule } from '@nestjs/testing';
import { SchuelerService } from './schueler.service';

describe('SchuelerService', () => {
  let service: SchuelerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchuelerService],
    }).compile();

    service = module.get<SchuelerService>(SchuelerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
