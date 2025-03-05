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
import { MunicipiosService } from './municipios.service';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { Municipio } from './entities/municipio.entity';

@ApiTags('Municipios')
@Controller('municipios')
export class MunicipiosController {
  constructor(private readonly municipiosService: MunicipiosService) {}

  // 🔹 POST: Crear un nuevo municipio
  @ApiOperation({ summary: 'Crear un municipio' })
  @ApiResponse({
    status: 201,
    description: 'Municipio creado con éxito',
    type: [Municipio],
  })
  @Post()
  create(@Body() createMunicipioDto: CreateMunicipioDto) {
    return this.municipiosService.create(createMunicipioDto);
  }

  @ApiOperation({ summary: 'Obtener todos los municipios' })
  @ApiResponse({
    status: 200,
    description: 'Lista de municipios',
    type: [Municipio],
  })
  @Get()
  findAll() {
    return this.municipiosService.findAll();
  }

  // 🔹 GET: Obtener un municipio por ID
  @ApiOperation({ summary: 'Obtener un municipio por su ID' })
  @ApiResponse({
    status: 200,
    description: 'Municipio encontrado',
    type: Municipio,
  })
  @ApiResponse({ status: 404, description: 'municipio no encontrado' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.municipiosService.findOne(+id);
  }

  // 🔹 PATCH: Actualizar un municipio por ID
  @ApiOperation({ summary: 'Actualizar un municipio por su ID' })
  @ApiResponse({
    status: 200,
    description: 'municipio actualizado con éxito',
    type: Municipio,
  })
  @ApiResponse({ status: 404, description: 'municipio no encontrado' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMunicipioDto: UpdateMunicipioDto,
  ) {
    return this.municipiosService.update(+id, updateMunicipioDto);
  }

  // 🔹 DELETE: Eliminar un municipio por ID
  @ApiOperation({ summary: 'Eliminar un municipio por su ID' })
  @ApiResponse({ status: 200, description: 'municipio eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'municipio no encontrado' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.municipiosService.remove(+id);
  }
}
