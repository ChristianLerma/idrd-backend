import { ApiProperty } from '@nestjs/swagger';
import { Departamento } from 'src/departamentos/entities/departamento.entity';
import { Municipio } from 'src/municipios/entities/municipio.entity';
import {
  Column,
  Entity,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Proyecto {
  @ApiProperty({ description: 'ID único del proyecto' })
  @Column({ primary: true, generated: true })
  id: number;

  @ApiProperty({ description: 'Nombre del proyecto' })
  @Column()
  nombre: string;

  @ApiProperty({
    description: 'Departamento asociado al proyecto',
    type: () => [Departamento],
  })
  //Relación muchos a uno con Departamento
  @ManyToOne(() => Departamento, (departamento) => departamento.id, {
    eager: true, // Carga automática del departamento
  })
  departamento: Departamento;

  //Relación muchos a uno con Municipio
  @ApiProperty({
    description: 'Municipio asociado al proyecto',
    type: () => Municipio,
  })
  @ManyToOne(() => Municipio, (municipio) => municipio.proyectos, {
    eager: true, // Carga automática del municipio
  })
  municipio: Municipio;

  @ApiProperty({ description: 'Fecha de creación del registro' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualizació del registro' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: 'Fecha de eliminación del registro' })
  @DeleteDateColumn()
  deletedAt: Date;
}
