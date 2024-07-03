import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { CreateSchuelerDto } from './dto/create-schueler-dto';
import { UpdateSchuelerDto } from './dto/update-schueler-dto';
import { SchuelerService } from './schueler.service';

@Controller('schueler')
export class SchuelerController {
    constructor(private readonly schuelerService: SchuelerService) { };

    @Get()
    getAllSchueler(@Query('sort') sort: 'asc' | 'desc') {
        return this.schuelerService.getAllSchueler(sort);;
    }

    @Get(':id')
    getOneSchueler(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.schuelerService.getSchueler(id);
        } catch (e) {
            throw new NotFoundException();
        }
    }

    @Post()
    createSchueler(@Body() createSchuelerDto: CreateSchuelerDto) {
        return this.schuelerService.createSchueler(createSchuelerDto);
    }

    @Put(':id')
    updateSchueler(@Param('id', ParseIntPipe) id: number, @Body() updateSchuelerDto: UpdateSchuelerDto) {
        try {
            return this.schuelerService.updateSchueler(id, updateSchuelerDto);
        } catch (e) {
            throw new NotFoundException();
        }
    }

    @Delete(':id')
    deleteSchueler(@Param('id', ParseIntPipe) id: number) {
        try {
            return this.schuelerService.deleteSchueler(id);
        } catch (e) {
            throw new NotFoundException();
        }
    }
}
