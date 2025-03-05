import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from './entities/material.entity';

@Injectable()
export class MaterialesService {
  constructor(
    @InjectRepository(Material)
    private materialRepository: Repository<Material>,
  ) {}

  async create(createMaterialDto: CreateMaterialDto) {
    return await this.materialRepository.save(createMaterialDto);
  }

  async findAll() {
    return await this.materialRepository.find();
  }

  async findOne(id: number) {
    return await this.materialRepository.findOneBy({ id });
  }

  async update(id: number, updateMaterialDto: UpdateMaterialDto) {
    await this.materialRepository.update({ id }, updateMaterialDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.materialRepository.softDelete({ id });
    if (result.affected === 0) {
      throw new NotFoundException('Material no encontrado');
    }
    return { message: 'Material eliminado con éxito' };
  }
}
