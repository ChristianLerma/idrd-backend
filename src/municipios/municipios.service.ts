import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipio } from './entities/municipio.entity';
import { Repository } from 'typeorm';
import { Departamento } from 'src/departamentos/entities/departamento.entity';

@Injectable()
export class MunicipiosService {
  constructor(
    @InjectRepository(Municipio)
    private readonly municipioRepository: Repository<Municipio>,
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) {}

  async create(createMunicipioDto: CreateMunicipioDto) {
    const departamento = await this.departamentoRepository.findOneBy({
      id: createMunicipioDto.departamentoId,
    });

    if (!departamento) {
      throw new BadRequestException('El Departamento no existe');
    }

    return await this.municipioRepository.save({
      ...createMunicipioDto,
      departamento,
    });
  }

  async findAll() {
    return await this.municipioRepository.find();
  }

  async findOne(id: number) {
    return await this.municipioRepository.findOneBy({ id });
  }

  async update(id: number, updateMunicipioDto: UpdateMunicipioDto) {
    await this.municipioRepository.update({ id }, updateMunicipioDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.municipioRepository.softDelete({ id });
    if (result.affected === 0) {
      throw new NotFoundException('Municipio no encontrado');
    }
    return { message: 'Municipio eliminado con éxito' };
  }
}
