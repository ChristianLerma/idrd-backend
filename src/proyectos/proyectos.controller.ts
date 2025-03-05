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
import { ProyectosService } from './proyectos.service';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { Proyecto } from './entities/proyecto.entity';

@ApiTags('Proyectos')
@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  // 🔹 POST: Crear un nuevo proyecto
  @ApiOperation({ summary: 'Crear un proyecto' })
  @ApiResponse({
    status: 201,
    description: 'proyecto creado con éxito',
    type: [Proyecto],
  })
  @Post()
  create(@Body() createProyectoDto: CreateProyectoDto) {
    return this.proyectosService.create(createProyectoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los proyectos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de proyectos',
    type: [Proyecto],
  })
  @Get()
  findAll() {
    return this.proyectosService.findAll();
  }

  // 🔹 GET: Obtener un proyecto por ID
  @ApiOperation({ summary: 'Obtener un proyecto por su ID' })
  @ApiResponse({
    status: 200,
    description: 'proyecto encontrado',
    type: Proyecto,
  })
  @ApiResponse({ status: 404, description: 'proyecto no encontrado' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.proyectosService.findOne(+id);
  }

  // 🔹 PATCH: Actualizar un proyecto por ID
  @ApiOperation({ summary: 'Actualizar un proyecto por su ID' })
  @ApiResponse({
    status: 200,
    description: 'proyecto actualizado con éxito',
    type: Proyecto,
  })
  @ApiResponse({ status: 404, description: 'proyecto no encontrado' })
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateProyectoDto: UpdateProyectoDto,
  ) {
    return this.proyectosService.update(+id, updateProyectoDto);
  }

  // 🔹 DELETE: Eliminar un proyecto por ID
  @ApiOperation({ summary: 'Eliminar un proyecto por su ID' })
  @ApiResponse({ status: 200, description: 'proyecto eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'proyecto no encontrado' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.proyectosService.remove(+id);
  }
}
