import { ApiProperty } from '@nestjs/swagger';
import { Departamento } from 'src/departamentos/entities/departamento.entity';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Municipio {
  @ApiProperty({ description: 'ID único del municipio' })
  @Column({ primary: true, generated: true })
  id: number;

  @ApiProperty({ description: 'Nombre del municipio' })
  @Column()
  nombre: string;

  @ApiProperty({
    description: 'Departamento asociado al municipio',
    type: () => [Departamento],
  })
  // Relación muchos a uno con Departamento
  @ManyToOne(() => Departamento, (departamento) => departamento.id, {
    eager: true, //Trae todos los datos del departamento
  })
  departamento: Departamento;

  // Relación uno a muchos con Proyectos
  @OneToMany(() => Proyecto, (proyecto) => proyecto.municipio)
  proyectos: Proyecto[];

  @ApiProperty({ description: 'Fecha de creación del registro' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización del registro' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: 'Fecha de eliminación del registro' })
  @DeleteDateColumn()
  deletedAt: Date;
}
