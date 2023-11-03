import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {
  compute() {
    console.log('Computing...');
  }
}
