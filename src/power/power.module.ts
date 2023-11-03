import { Module } from '@nestjs/common';
import { PowerService } from './power.service';
import { PowerController } from './power.controller';
import { RegulatorService } from './regulator.service';

@Module({
  providers: [PowerService, RegulatorService],
  controllers: [PowerController],
  exports: [PowerService],
})
export class PowerModule {}
