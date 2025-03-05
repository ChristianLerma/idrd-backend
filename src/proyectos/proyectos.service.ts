import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { Departamento } from 'src/departamentos/entities/departamento.entity';
import { Municipio } from 'src/municipios/entities/municipio.entity';

@Injectable()
export class ProyectosService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
    @InjectRepository(Municipio)
    private readonly municipioRepository: Repository<Municipio>,
  ) {}

  async create(createProyectoDto: CreateProyectoDto) {
    const departamento = await this.departamentoRepository.findOneBy({
      id: createProyectoDto.departamentoId,
    });

    if (!departamento) {
      throw new BadRequestException('El Departamento no existe');
    }

    const municipio = await this.municipioRepository.findOneBy({
      id: createProyectoDto.municipioId,
    });

    if (!municipio) {
      throw new BadRequestException('El Municipio no existe');
    }

    return await this.proyectoRepository.save({
      ...createProyectoDto,
      departamento,
      municipio,
    });
  }

  async findAll() {
    return await this.proyectoRepository.find();
  }

  async findOne(id: number) {
    return await this.proyectoRepository.findOneBy({ id });
  }

  async update(id: number, updateProyectoDto: UpdateProyectoDto) {
    await this.proyectoRepository.update({ id }, updateProyectoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.proyectoRepository.softDelete({ id });
    if (result.affected === 0) {
      throw new NotFoundException('Proyecto no encontrado');
    }
    return { message: 'Proyecto eliminado con éxito' };
  }
}
