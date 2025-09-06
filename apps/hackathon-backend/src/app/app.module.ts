import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environments/environment';
import { ProgramModule } from '../program/program.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${environment.mongoUsername}:${environment.mongoPassword}@cluster0.5y9bri6.mongodb.net/`,
      {
        dbName: environment.mongoDbName,
        retryWrites: true,
        w: 'majority',
      }
    ),
    ProgramModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
