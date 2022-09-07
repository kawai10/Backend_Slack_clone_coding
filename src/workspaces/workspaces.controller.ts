import { Controller, Delete, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Workspace')
@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces(){}

  @Post()
  createWorkspace(){}

  @Get(':url/members')
  getAllMembersFromWorkspace(){

  }

  @Post(':url/members')
  inviteMemberToWorkspace(){

  }

  @Delete(':url/members/:id')
  kickMemberFromWorkspace(){

  }

  @Get(':url/members/:id')
  getMemberInfoInWorkspace(){

  }



}
