import { Body, Controller, Get, Post, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { JoinRequestDto } from "./dto/join.request.dto";
import { UsersService } from "./users.service";
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserDto } from "../common/dto/user.dto";
import { User } from "../common/decorator/user.decorator";
import { UndefinedToNullInterceptor } from "../common/interceptors/undefinedToNull.interceptor";
import { LocalAuthGuard } from "../auth/local.auth.guard";
import { LoggedInGuard } from "../auth/logged-in.guard";
import { NotLoggedInGuard } from "../auth/not-logged-in.guard";

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
    return this.usersService.findByEmail(user.email)
  }

  @UseGuards(new NotLoggedInGuard())
  @ApiOperation({summary:'회원가입'})
  @Post()
  async postUsers(@Body() data:JoinRequestDto) {
    await this.usersService.postUsers(data)
  }

  @ApiOperation({summary:'로그인'})
  @ApiOkResponse({
    type: UserDto,
  })
  @UseGuards(new LocalAuthGuard())
  @Post('login')
  logIn(@User() user) {
    return user
  }

  @UseGuards(new LoggedInGuard())
  @ApiOperation({summary:'로그아웃'})
  @Post('logout')
  logOut() {

  }

}
