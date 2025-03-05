import { ApiProperty } from '@nestjs/swagger';
import { Material } from 'src/materiales/entities/material.entity';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
@Entity()
export class CreateProyectoMaterialDto {
  @ApiProperty({ description: 'Proyecto asociado' })
  @ManyToOne(() => Proyecto, (proyecto) => proyecto.proyectoMateriales, { onDelete: 'CASCADE' })
  proyecto: Proyecto;

  @ApiProperty({ description: 'Material asociado' })
  @ManyToOne(() => Material, (material) => material.proyectoMateriales, { onDelete: 'CASCADE' })
  material: Material;

  @ApiProperty({ description: 'Cantidad de material asignado' })
  @Column()
  cantidad: number;
}
