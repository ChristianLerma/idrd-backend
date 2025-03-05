import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateMaterialDto {
  @ApiProperty({
    description: 'Código del material',
    example: 'COD1',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  codigo: string;

  @ApiProperty({
    description: 'Descripción del material',
    example: 'El material está compuesto por A, B y C productos',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  descripcion: string;

  @ApiProperty({
    description: 'Unidad de medida del material',
    example: 'M2, Unidad, Kg',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  unidad: string;

  @ApiProperty({
    description: 'Precio del material',
    example: '1000',
  })
  @IsNumber()
  precio: number;
}
