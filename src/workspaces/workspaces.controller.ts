import { Body, Controller, Delete, Get, ParseIntPipe, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { WorkspacesService } from "./workspaces.service";

@ApiTags('Workspace')
@Controller('api/workspaces')
export class WorkspacesController {

  constructor(
    private workspacesService:WorkspacesService
  ) {
  }

  @Get()
  getMyWorkspaces(@Body('myId', ParseIntPipe) myId:number){
    return this.workspacesService.findMyWorkspaces(myId)
  }

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
