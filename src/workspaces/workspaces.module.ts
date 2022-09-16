import { Module } from '@nestjs/common';
import { WorkspacesService } from './workspaces.service';
import { WorkspacesController } from './workspaces.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Workspaces } from "../entities/Workspaces";
import { Channels } from "../entities/Channels";
import { WorkspaceMembers } from "../entities/WorkspaceMembers";
import { ChannelMembers } from "../entities/ChannelMembers";
import { Users } from "../entities/Users";

@Module({
  imports:[
    TypeOrmModule.forFeature([Workspaces,Channels,WorkspaceMembers,ChannelMembers,Users])
  ],
  providers: [WorkspacesService],
  controllers: [WorkspacesController]
})
export class WorkspacesModule {}
