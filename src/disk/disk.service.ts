import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    console.log('DiskService.getData() called');
    this.powerService.supplyPower(10);
    return 'Data from disk';
  }
}
