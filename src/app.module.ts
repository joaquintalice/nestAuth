import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './db/prisma.service';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
