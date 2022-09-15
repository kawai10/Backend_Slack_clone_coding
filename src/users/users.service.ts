import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JoinRequestDto } from "./dto/join.request.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../entities/Users";
import { Repository } from "typeorm";
import bcrypt from "bcrypt"

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private usersRepository:Repository<Users>,
  ) {}

  async postUsers(data: JoinRequestDto) {
    const {email, nickname, password} = data
    const user = await this.usersRepository.findOne({where:{email}})

    if (user) {
      throw new UnauthorizedException('Already Exist User')
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    await this.usersRepository.save({
      email,
      nickname,
      password:hashedPassword
    })
  }
}
