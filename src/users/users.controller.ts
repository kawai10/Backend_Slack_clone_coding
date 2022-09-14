import { Body, Controller, Get, Post, Req, UseInterceptors } from "@nestjs/common";
import { JoinRequestDto } from "./dto/join.request.dto";
import { UsersService } from "./users.service";
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserDto } from "../common/dto/user.dto";
import { User } from "../common/decorator/user.decorator";
import { UndefinedToNullInterceptor } from "../common/interceptors/undefinedToNull.interceptor";

@UseInterceptors(UndefinedToNullInterceptor)
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
  getUsers(@User() user) {
    return user
  }

  @ApiOperation({summary:'회원가입'})
  @Post()
  async postUsers(@Body() data:JoinRequestDto) {
    await this.usersService.postUsers(data)
  }

  @ApiOperation({summary:'로그인'})
  @ApiOkResponse({
    type: UserDto,
  })
  @Post('login')
  logIn(@User() user) {
    return user
  }

  @ApiOperation({summary:'로그아웃'})
  @Post('logout')
  logOut() {

  }

}
