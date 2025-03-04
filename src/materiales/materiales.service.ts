import { Injectable } from '@nestjs/common';
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
    return await this.materialRepository.update({ id }, updateMaterialDto);
  }

  async remove(id: number) {
    return await this.materialRepository.softDelete({ id });
  }
}
