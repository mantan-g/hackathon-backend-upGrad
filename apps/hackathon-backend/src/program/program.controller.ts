import { Body, Controller, Post } from '@nestjs/common';
import { ProgramService } from './program.service';

@Controller('program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @Post('create-program')
  async createProgram(@Body() body: any) {
    return this.programService.createProgram(body);
  }
}
