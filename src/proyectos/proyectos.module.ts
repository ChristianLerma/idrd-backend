import { Module } from '@nestjs/common';
import { ProyectosService } from './proyectos.service';
import { ProyectosController } from './proyectos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { DepartamentosModule } from 'src/departamentos/departamentos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto]), DepartamentosModule],
  controllers: [ProyectosController],
  providers: [ProyectosService],
  exports: [TypeOrmModule],
})
export class ProyectosModule {}
