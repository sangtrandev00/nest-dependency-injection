import { Controller, Get } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Controller('cpu')
export class CpuController {
  constructor(private powerService: PowerService) {}

  @Get()
  getCpu() {
    this.powerService.supplyPower(100);
    return `This is a CPU`;
  }
}
