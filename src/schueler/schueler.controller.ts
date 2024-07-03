import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateSchuelerDto } from './dto/create-schueler-dto';
import { UpdateSchuelerDto } from './dto/update-schueler-dto';
import { SchuelerService } from './schueler.service';

@Controller('schueler')
export class SchuelerController {
    constructor(private readonly schuelerService: SchuelerService) {};

    @Get()
    getAllSchueler(@Query('sort') sort: 'asc' | 'desc') {
        return this.schuelerService.getAllSchueler(sort);;
    }

    @Get(':id')
    getOneSchueler(@Param('id') id: string) {
        return this.schuelerService.getSchueler(+id);
    }

    @Post()
    createSchueler(@Body() createSchuelerDto: CreateSchuelerDto) {
        return {};
    }

    @Put(':id')
    updateSchueler(@Param('id') id: string, @Body() updateSchuelerDto: UpdateSchuelerDto) {
        return { id };
    }

    @Delete(':id')
    deleteSchueler(@Param('id') id: string) {
        return { id };
    }
}
