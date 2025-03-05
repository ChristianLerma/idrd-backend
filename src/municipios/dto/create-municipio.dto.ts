import { IsNumber, IsString } from 'class-validator';
export class CreateMunicipioDto {
  @IsString()
  nombre: string;
  @IsNumber()
  departamentoId: number;
}
