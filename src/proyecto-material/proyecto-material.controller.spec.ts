import { Test, TestingModule } from '@nestjs/testing';
import { ProyectoMaterialController } from './proyecto-material.controller';
import { ProyectoMaterialService } from './proyecto-material.service';

describe('ProyectoMaterialController', () => {
  let controller: ProyectoMaterialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProyectoMaterialController],
      providers: [ProyectoMaterialService],
    }).compile();

    controller = module.get<ProyectoMaterialController>(ProyectoMaterialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
