/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class RegulatorService {
  regulatePower() {
    console.log('Regulating power...');
  }
}
