import { Body, Controller, Get, Post } from "@nestjs/common";
import { JoinRequestDto } from "./dto/join.request.dto";
import { UsersService } from "./users.service";

@Controller('api/users')
export class UsersController {

  constructor(private usersService:UsersService) {
  }

  @Get()
  getUsers() {

  }

  @Post()
  postUsers(@Body() data:JoinRequestDto) {
    this.usersService.postUsers(data)
  }

  @Post('login')
  logIn() {

  }

  @Post('logout')
  logOut() {

  }

}
