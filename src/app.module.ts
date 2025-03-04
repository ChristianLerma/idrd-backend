import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialesModule } from './materiales/materiales.module';
import { ProyectosModule } from './proyectos/proyectos.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
