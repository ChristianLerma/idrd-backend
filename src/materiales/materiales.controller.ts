import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MaterialesService } from './materiales.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { Material } from './entities/material.entity';

@ApiTags('Materiales')
@Controller('materiales')
export class MaterialesController {
  constructor(private readonly materialesService: MaterialesService) {}

  // POST: Crear un nuevo material
  @ApiOperation({ summary: 'Crear un material' })
  @ApiResponse({
    status: 201,
    description: 'Material creado con éxito',
    type: [Material],
  })
  @Post()
  create(@Body() createMaterialDto: CreateMaterialDto) {
    return this.materialesService.create(createMaterialDto);
  }

  @ApiOperation({ summary: 'Obtener todos los materiales' })
  @ApiResponse({
    status: 200,
    description: 'Lista de materiales',
    type: [Material],
  })
  @Get()
  findAll() {
    return this.materialesService.findAll();
  }

  // GET: Obtener un material por ID
  @ApiOperation({ summary: 'Obtener un material por su ID' })
  @ApiResponse({
    status: 200,
    description: 'material encontrado',
    type: Material,
  })
  @ApiResponse({ status: 404, description: 'material no encontrado' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.materialesService.findOne(+id);
  }

  // PATCH: Actualizar un material por ID
  @ApiOperation({ summary: 'Actualizar un material por su ID' })
  @ApiResponse({
    status: 200,
    description: 'material actualizado con éxito',
    type: Material,
  })
  @ApiResponse({ status: 404, description: 'material no encontrado' })
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateMaterialDto: UpdateMaterialDto,
  ) {
    return this.materialesService.update(+id, updateMaterialDto);
  }

  // DELETE: Eliminar un material por ID
  @ApiOperation({ summary: 'Eliminar un material por su ID' })
  @ApiResponse({ status: 200, description: 'material eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'material no encontrado' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.materialesService.remove(+id);
  }
}
