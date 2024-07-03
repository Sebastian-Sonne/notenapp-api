import { Module } from '@nestjs/common';
import { SchuelerController } from './schueler.controller';
import { SchuelerService } from './schueler.service';

@Module({
  controllers: [SchuelerController],
  providers: [SchuelerService]
})
export class SchuelerModule {}
