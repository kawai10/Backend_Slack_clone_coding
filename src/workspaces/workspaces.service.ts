import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Workspaces } from "../entities/Workspaces";
import { Repository } from "typeorm";
import { Channels } from "../entities/Channels";
import { WorkspaceMembers } from "../entities/WorkspaceMembers";
import { ChannelMembers } from "../entities/ChannelMembers";
import { Users } from "../entities/Users";

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspaces)
    private workspaceRepository:Repository<Workspaces>,
    @InjectRepository(Channels)
    private channelsRepository:Repository<Channels>,
    @InjectRepository(WorkspaceMembers)
    private workspaceMemberRepository:Repository<WorkspaceMembers>,
    @InjectRepository(ChannelMembers)
    private channelMemberRepository:Repository<ChannelMembers>,
    @InjectRepository(Users)
    private usersRepository:Repository<Users>
  ) {
  }

  async findById(id:number){
    return this.workspaceRepository.findOne({where:{id}})
  }

  async findMyWorkspaces(myId:number){
    return this.workspaceRepository.find({
      where:{
        WorkspaceMembers:[{UserId:myId}]
      }
    })
  }
}
