import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { CoursesModule } from './modules';

@Module({
  imports: [CoursesModule],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
