import { Controller, Get } from '@nestjs/common';
import { ComputerService } from './computer.service';

@Controller('computer')
export class ComputerController {
  constructor(private computerService: ComputerService) {}

  @Get()
  getComputer() {
    this.computerService.run();
    return `This is a computer`;
  }
}
