import { Module } from '@nestjs/common';
import { DepartamentosService } from './departamentos.service';
import { DepartamentosController } from './departamentos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departamento } from './entities/departamento.entity';
import { Municipio } from 'src/municipios/entities/municipio.entity';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Departamento, Municipio, Proyecto])],
  controllers: [DepartamentosController],
  providers: [DepartamentosService],
  exports: [TypeOrmModule],
})
export class DepartamentosModule {}
