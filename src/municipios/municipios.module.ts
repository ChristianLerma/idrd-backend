import { Module } from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { MunicipiosController } from './municipios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipio } from './entities/municipio.entity';
import { DepartamentosModule } from 'src/departamentos/departamentos.module';
import { DepartamentosService } from 'src/departamentos/departamentos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Municipio]), DepartamentosModule],
  controllers: [MunicipiosController],
  providers: [MunicipiosService, DepartamentosService],
  exports: [TypeOrmModule],
})
export class MunicipiosModule {}
