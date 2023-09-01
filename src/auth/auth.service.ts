import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}

  async signup() {
    return { message: 'just4test' };
  }

  async signin() {}

  async signout() {}
}
