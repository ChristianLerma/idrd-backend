import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProyectoMaterial } from './entities/proyecto-material.entity';
import { Repository } from 'typeorm';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import { Material } from 'src/materiales/entities/material.entity';
import { AssignMaterialDto } from './dto/assign-material.dto';

@Injectable()
export class ProyectoMaterialService {
  constructor(
    @InjectRepository(ProyectoMaterial)
    private readonly proyectoMaterialRepository: Repository<ProyectoMaterial>,
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,
    @InjectRepository(Material)
    private readonly materialRepository: Repository<Material>,
  ) {}

  async assignMaterial(dto: AssignMaterialDto) {
    const proyecto = await this.proyectoRepository.findOne({
      where: { id: dto.proyectoId },
    });
    if (!proyecto) throw new NotFoundException('Proyecto no encontrado');

    const material = await this.materialRepository.findOne({
      where: { id: dto.materialId },
    });
    if (!material) throw new NotFoundException('Material no encontrado');

    const proyectoMaterial = this.proyectoMaterialRepository.create({
      cantidad: dto.cantidad,
      proyecto,
      material,
    });

    return await this.proyectoMaterialRepository.save(proyectoMaterial);
  }

  async findByProyecto(proyectoId: number) {
    return await this.proyectoMaterialRepository.find({
      where: { proyecto: { id: proyectoId } },
      relations: ['material'],
    });
  }

  async findByMaterial(materialId: number) {
    return await this.proyectoMaterialRepository.find({
      where: { material: { id: materialId } },
      relations: ['proyecto'],
    });
  }
}
