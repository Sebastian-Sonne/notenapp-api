import { PartialType } from '@nestjs/mapped-types';
import { CreateSchuelerDto } from './create-schueler.dto';

export class UpdateSchuelerDto extends PartialType(CreateSchuelerDto) {}
