import { Injectable } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './entities/proyecto.entity';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectoRepository: Repository<Proyecto>,
  ) {}

  async create(createProyectoDto: CreateProyectoDto) {
    return await this.proyectoRepository.save(createProyectoDto);
  }

  async findAll() {
    return await this.proyectoRepository.find();
  }

  async findOne(id: number) {
    return await this.proyectoRepository.findOneBy({ id });
  }

  async update(id: number, updateProyectoDto: UpdateProyectoDto) {
    return await this.proyectoRepository.update({ id }, updateProyectoDto);
  }

  async remove(id: number) {
    return await this.proyectoRepository.softDelete({ id });
  }
}
