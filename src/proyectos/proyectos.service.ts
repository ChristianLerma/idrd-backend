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
import { omitBy, isNil } from 'lodash';

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
    const proyecto = await this.proyectoRepository.findOne({ where: { id } });

    if (!proyecto)
      throw new NotFoundException(`Proyecto con id ${id} no encontrado`);

    // Verificar y asignar el departamento si viene en el DTO
    if (typeof updateProyectoDto.departamentoId === 'number') {
      const departamento = await this.departamentoRepository.findOne({
        where: { id: updateProyectoDto.departamentoId },
      });
      if (!departamento)
        throw new BadRequestException('Departamento no encontrado');
      proyecto.departamento = departamento;
    }

    // Verificar y asignar el municipio si viene en el DTO
    if (typeof updateProyectoDto.municipioId === 'number') {
      const municipio = await this.municipioRepository.findOne({
        where: { id: updateProyectoDto.municipioId },
      });
      if (!municipio) throw new BadRequestException('Municipio no encontrado');
      proyecto.municipio = municipio;
    }

    // Validar y asignar solo los campos válidos
    Object.keys(updateProyectoDto).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const value = updateProyectoDto[key];

      if (value !== undefined && value !== null) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        (proyecto as any)[key] = value; // Usar `as any` para evitar errores de tipo en la asignación
      }
    });

    return await this.proyectoRepository.save(proyecto);
  }

  async remove(id: number) {
    const result = await this.proyectoRepository.softDelete({ id });
    if (result.affected === 0) {
      throw new NotFoundException('Proyecto no encontrado');
    }
    return { message: 'Proyecto eliminado con éxito' };
  }
}
