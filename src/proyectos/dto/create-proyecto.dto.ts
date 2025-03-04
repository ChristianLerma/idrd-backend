import { IsNumber, IsString } from 'class-validator';
export class CreateProyectoDto {
  @IsString()
  nombre: string;
  @IsNumber()
  departamento: number;
  @IsNumber()
  municipio: number;
}
