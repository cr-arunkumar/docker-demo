import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  @Get("/test")
  test(): string {
    return 'Hello World from test!';
  }
}
