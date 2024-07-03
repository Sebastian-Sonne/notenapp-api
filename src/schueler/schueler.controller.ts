import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchuelerService } from './schueler.service';
import { CreateSchuelerDto } from './dto/create-schueler.dto';
import { UpdateSchuelerDto } from './dto/update-schueler.dto';

@Controller('schueler')
export class SchuelerController {
  constructor(private readonly schuelerService: SchuelerService) {}

  @Post()
  create(@Body() createSchuelerDto: CreateSchuelerDto) {
    return this.schuelerService.create(createSchuelerDto);
  }

  @Get()
  findAll() {
    return this.schuelerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schuelerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSchuelerDto: UpdateSchuelerDto) {
    return this.schuelerService.update(+id, updateSchuelerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schuelerService.remove(+id);
  }
}
