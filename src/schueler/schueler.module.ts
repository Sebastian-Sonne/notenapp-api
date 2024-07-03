import { Module } from '@nestjs/common';
import { SchuelerService } from './schueler.service';
import { SchuelerController } from './schueler.controller';

@Module({
  controllers: [SchuelerController],
  providers: [SchuelerService],
})
export class SchuelerModule {}
