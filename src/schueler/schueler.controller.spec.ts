import { Test, TestingModule } from '@nestjs/testing';
import { SchuelerController } from './schueler.controller';

describe('SchuelerController', () => {
  let controller: SchuelerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchuelerController],
    }).compile();

    controller = module.get<SchuelerController>(SchuelerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
