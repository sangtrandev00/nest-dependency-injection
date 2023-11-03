import { Controller, Get } from '@nestjs/common';
import { DiskService } from './disk.service';

@Controller('disk')
export class DiskController {
  constructor(private diskService: DiskService) {}

  @Get()
  getDisk() {
    this.diskService.getData();
    return `This is a disk`;
  }
}
