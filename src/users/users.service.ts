import { Injectable } from '@nestjs/common';
import { JoinRequestDto } from "./dto/join.request.dto";

@Injectable()
export class UsersService {

  postUsers(data: JoinRequestDto) {
    const {email, nickname, password} = data
  }
}
