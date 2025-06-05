import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'HeartLetter API 서버에 오신 것을 환영합니다!';
  }
}
