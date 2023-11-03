import { Injectable } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Injectable()
export class ComputerService {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  run() {
    console.log('ComputerService.run() called');
    const cpu = this.cpuService.compute();
    const disk = this.diskService.getData();
    return `CPU: ${cpu} - DISK: ${disk}`;
  }
}
