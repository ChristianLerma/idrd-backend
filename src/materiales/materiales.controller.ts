import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
@Controller('materiales')
export class MaterialesController {
  constructor(private readonly materialesService: MaterialesService) {}

  @Post()
  create(@Body() createMaterialDto: CreateMaterialDto) {
    return this.materialesService.create(createMaterialDto);
  }

  @Get()
  findAll() {
    return this.materialesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.materialesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateMaterialDto: UpdateMaterialDto,
  ) {
    return this.materialesService.update(+id, updateMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.materialesService.remove(+id);
  }
}
