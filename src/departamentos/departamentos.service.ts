import { Injectable, NotFoundException } from '@nestjs/common';
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
    return await this.departamentoRepository.find({
      relations: ['municipios'],
    });
  }

  async findOne(id: number) {
    const departamento = await this.departamentoRepository.findOne({
      where: { id: id },
      relations: ['municipios'],
    });

    if (!departamento) {
      throw new NotFoundException('Departamento no encontrado');
    }
    return departamento;
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto) {
    await this.departamentoRepository.update({ id }, updateDepartamentoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.departamentoRepository.softDelete({ id });
    if (result.affected === 0) {
      throw new NotFoundException('Departamento no encontrado');
    }
    return { message: 'Departamento eliminado con éxito' };
  }
}
