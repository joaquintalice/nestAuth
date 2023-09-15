import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import AuthDto from './dto/auth.dto';

@Injectable()
export class AuthService {

  constructor(private prismaService: PrismaService) { }

  async signup(authDto: AuthDto) {
    const { email, password } = authDto;



    return { message: 'All data passed' };
  }

  async signin() { }

  async signout() { }
}
