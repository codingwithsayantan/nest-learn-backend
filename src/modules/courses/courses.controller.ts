import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    // TODO: Implement logic to retrieve all courses
    throw new Error('Method not implemented');
  }
}
