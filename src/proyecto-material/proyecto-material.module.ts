import { Module } from '@nestjs/common';
import { ProyectoMaterialService } from './proyecto-material.service';
import { ProyectoMaterialController } from './proyecto-material.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProyectoMaterial } from './entities/proyecto-material.entity';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import { Material } from 'src/materiales/entities/material.entity';
import { ProyectosModule } from 'src/proyectos/proyectos.module';
import { MaterialesModule } from 'src/materiales/materiales.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProyectoMaterial, Proyecto, Material]),
    ProyectosModule,
    MaterialesModule,
  ],
  controllers: [ProyectoMaterialController],
  providers: [ProyectoMaterialService],
  exports: [TypeOrmModule],
})
export class ProyectoMaterialModule {}
