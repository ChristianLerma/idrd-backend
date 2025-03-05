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
import { DepartamentosService } from './departamentos.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento } from './entities/departamento.entity';

@ApiTags('Departamentos')
@Controller('departamentos')
export class DepartamentosController {
  constructor(private readonly departamentosService: DepartamentosService) {}

  // 🔹 POST: Crear un nuevo departamento
  @ApiOperation({ summary: 'Crear un departamento' })
  @ApiResponse({
    status: 201,
    description: 'Departamento creado con éxito',
    type: [Departamento],
  })
  @Post()
  create(@Body() createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamentosService.create(createDepartamentoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los departamentos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de departamentos',
    type: [Departamento],
  })
  @Get()
  findAll() {
    return this.departamentosService.findAll();
  }

  // 🔹 GET: Obtener un departamento por ID
  @ApiOperation({ summary: 'Obtener un departamento por su ID' })
  @ApiResponse({
    status: 200,
    description: 'Departamento encontrado',
    type: Departamento,
  })
  @ApiResponse({ status: 404, description: 'Departamento no encontrado' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departamentosService.findOne(+id);
  }

  // 🔹 PATCH: Actualizar un departamento por ID
  @ApiOperation({ summary: 'Actualizar un departamento por su ID' })
  @ApiResponse({
    status: 200,
    description: 'Departamento actualizado con éxito',
    type: Departamento,
  })
  @ApiResponse({ status: 404, description: 'Departamento no encontrado' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartamentoDto: UpdateDepartamentoDto,
  ) {
    return this.departamentosService.update(+id, updateDepartamentoDto);
  }

  // 🔹 DELETE: Eliminar un departamento por ID
  @ApiOperation({ summary: 'Eliminar un departamento por su ID' })
  @ApiResponse({ status: 200, description: 'Departamento eliminado con éxito' })
  @ApiResponse({ status: 404, description: 'Departamento no encontrado' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departamentosService.remove(+id);
  }
}
