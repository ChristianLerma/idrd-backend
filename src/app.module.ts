import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialesModule } from './materiales/materiales.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { MunicipiosModule } from './municipios/municipios.module';
import { ProyectoMaterialModule } from './proyecto-material/proyecto-material.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'idrd',
      password: 'idrd',
      database: 'idrd',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MaterialesModule,
    ProyectosModule,
    DepartamentosModule,
    MunicipiosModule,
    ProyectoMaterialModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
