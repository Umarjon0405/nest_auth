import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { GetCurrentUserBYId } from './utils/get-user-by-id.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getHello(@GetCurrentUserBYId() userId: number ): string {
    console.log('get hello controller', userId);
    
    return this.appService.getHello();
  }
}
 