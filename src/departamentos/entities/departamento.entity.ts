import { ApiProperty } from '@nestjs/swagger';
import { Municipio } from 'src/municipios/entities/municipio.entity';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Departamento {
  @ApiProperty({ description: 'ID único del departamento' })
  @Column({ primary: true, generated: true })
  id: number;

  @ApiProperty({ description: 'Nombre del departamento' })
  @Column()
  nombre: string;

  @ApiProperty({ description: 'Fecha de creación del registro' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización del registro' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: 'Fecha de eliminación del registro' })
  @DeleteDateColumn()
  deletedAt: Date;

  @ApiProperty({
    description: 'Lista de municipios pertenecientes al departamento',
    type: () => [Municipio],
  })
  //Relación uno a muchos con Municipio
  @OneToMany(() => Municipio, (municipio) => municipio.departamento)
  municipios: Municipio[]; //Un departamento tiene muchos municipios

  @ApiProperty({
    description: 'Lista de proyectos pertenecientes al departamento',
    type: () => [Departamento],
  })
  //Relación uno a muchos con Proyectos
  @OneToMany(() => Proyecto, (proyecto) => proyecto.departamento)
  proyectos: Proyecto[]; //Un departamento tiene muchos proyectos
}
