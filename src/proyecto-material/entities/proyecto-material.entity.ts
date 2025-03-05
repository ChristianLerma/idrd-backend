import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import { Material } from 'src/materiales/entities/material.entity';
import {
  Column,
  Entity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ProyectoMaterial {
  @ApiProperty({ description: 'ID único del registro' })
  @Column({ primary: true, generated: true })
  id: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.proyectoMateriales, {
    onDelete: 'CASCADE',
    eager: true,
  })
  proyecto: Proyecto;

  @ManyToOne(() => Material, (material) => material.proyectoMateriales, {
    onDelete: 'CASCADE',
    eager: true,
  })
  material: Material;

  @ApiProperty({ description: 'Cantidad asignada' })
  @Column()
  cantidad: number;

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
