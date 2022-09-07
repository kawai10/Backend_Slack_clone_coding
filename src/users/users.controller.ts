import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { JoinRequestDto } from "./dto/join.request.dto";
import { UsersService } from "./users.service";
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserDto } from "../common/dto/user.dto";

@ApiTags('User')
@Controller('api/users')
export class UsersController {

  constructor(private usersService:UsersService) {
  }
  @ApiOperation({summary:'내 정보 조회'})
  @ApiOkResponse({
    type: UserDto,
  })
  @Get()
  getUsers(@Req() req) {
    return req.user
  }

  @ApiOperation({summary:'회원가입'})
  @Post()
  postUsers(@Body() data:JoinRequestDto) {
    this.usersService.postUsers(data)
  }

  @ApiOperation({summary:'로그인'})
  @ApiOkResponse({
    type: UserDto,
  })
  @Post('login')
  logIn(@Req() req) {
    return req.user
  }

  @ApiOperation({summary:'로그아웃'})
  @Post('logout')
  logOut() {

  }

}
