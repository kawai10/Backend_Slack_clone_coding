import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JoinRequestDto } from "./dto/join.request.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../entities/Users";
import { DataSource, Repository } from "typeorm";
import bcrypt from "bcrypt"
import { WorkspaceMembers } from "../entities/WorkspaceMembers";
import { ChannelMembers } from "../entities/ChannelMembers";

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private usersRepository:Repository<Users>,
    @InjectRepository(WorkspaceMembers)
    private workSpaceMembers: Repository<WorkspaceMembers>,
    @InjectRepository(ChannelMembers)
    private channelMembers: Repository<ChannelMembers>,
    private dataSource:DataSource
  ) {}

  async findByEmail(email:string){
    return this.usersRepository.findOne({
      where:{email},
      select: ['id', 'email','password']
    })
  }


  async postUsers(data: JoinRequestDto) {
    const {email, nickname, password} = data
    const user = await this.usersRepository.findOne({where:{email}})

    if (user) {
      throw new UnauthorizedException('Already Exist User')
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      const returned = await queryRunner.manager.getRepository(Users).save({
        email,
        nickname,
        password:hashedPassword
      })

      await queryRunner.manager.getRepository(WorkspaceMembers).save({
          UserId: returned.id,
          WorkspaceId :1
        }
      )
      await queryRunner.manager.getRepository(ChannelMembers).save({
          UserId: returned.id,
          ChannelId :1
        }
      )
      await queryRunner.commitTransaction()
    } catch (err){
      await queryRunner.rollbackTransaction()
    } finally {
      await queryRunner.release()
    }

    return true
  }
}
