import { Injectable } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Departamento } from './entities/departamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectRepository(Departamento)
    private departamentoRepository: Repository<Departamento>,
  ) {}

  async create(createDepartamentoDto: CreateDepartamentoDto) {
    return await this.departamentoRepository.save(createDepartamentoDto);
  }

  async findAll() {
    return await this.departamentoRepository.find();
  }

  async findOne(id: number) {
    return await this.departamentoRepository.findOneBy({ id });
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    return await this.departamentoRepository.update(
      { id },
      updateDepartamentoDto,
    );
  }

  async remove(id: number) {
    return await this.departamentoRepository.softDelete({ id });
  }
}
