import { Injectable } from '@nestjs/common';
import { CreateSchuelerDto } from './dto/create-schueler.dto';
import { UpdateSchuelerDto } from './dto/update-schueler.dto';

@Injectable()
export class SchuelerService {
  create(createSchuelerDto: CreateSchuelerDto) {
    return 'This action adds a new schueler';
  }

  findAll() {
    return `This action returns all schueler`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schueler`;
  }

  update(id: number, updateSchuelerDto: UpdateSchuelerDto) {
    return `This action updates a #${id} schueler`;
  }

  remove(id: number) {
    return `This action removes a #${id} schueler`;
  }
}
