import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProyectoMaterialService } from './proyecto-material.service';
import { AssignMaterialDto } from './dto/assign-material.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Proyecto Materiales')
@Controller('proyecto-materiales')
export class ProyectoMaterialController {
  constructor(
    private readonly proyectoMaterialService: ProyectoMaterialService,
  ) {}

  @ApiOperation({ summary: 'Asignar un material a un proyecto' })
  // POST: Crear un nuevo material
  @ApiResponse({
    status: 201,
    description: 'Asignación de Material con éxito',
    type: [AssignMaterialDto],
  })
  @Post()
  assignMaterial(@Body() dto: AssignMaterialDto) {
    return this.proyectoMaterialService.assignMaterial(dto);
  }

  // GET: Obtener materiales asignados a un proyecto por ID
  @ApiOperation({ summary: 'Obtener materiales asignados a un proyecto' })
  @ApiResponse({
    status: 200,
    description: 'Materiales asignados',
    type: AssignMaterialDto,
  })
  @ApiResponse({ status: 404, description: 'proyecto no encontrado' })
  @Get(':proyectoId')
  findByProyecto(@Param('proyectoId') proyectoId: number) {
    return this.proyectoMaterialService.findByProyecto(+proyectoId);
  }

  // GET: Obtener proyectos asociados a un material por ID
  @ApiOperation({ summary: 'Obtener proyectos asociados a un material' })
  @ApiResponse({
    status: 200,
    description: 'Proyectos asignados',
    type: AssignMaterialDto,
  })
  @ApiResponse({ status: 404, description: 'material no encontrado' })
  @Get('material/:materialId')
  findByMaterial(@Param('materialId') materialId: number) {
    return this.proyectoMaterialService.findByMaterial(+materialId);
  }
}
