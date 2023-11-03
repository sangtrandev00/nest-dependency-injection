import { Injectable } from '@nestjs/common';
import { RegulatorService } from './regulator.service';

@Injectable()
export class PowerService {
  constructor(private regulatorService: RegulatorService) {}

  supplyPower(watts: number) {
    console.log(`regulatorService: ${this.regulatorService.regulatePower()}`);
    console.log(`Supplying ${watts} worth of power.`);
  }
}
