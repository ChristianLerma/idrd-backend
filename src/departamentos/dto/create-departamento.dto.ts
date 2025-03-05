import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
export class CreateDepartamentoDto {
  @ApiProperty({
    description: 'Nombre del departamento',
    example: 'CUNDINAMARCA',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(255)
  nombre: string;
}
