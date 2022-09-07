import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Channel')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels(){

  }

  @Post()
  createChannels() {

  }

  @Get(':name')
  getSpecificChannel(){}



  @Get(':name/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page)
    console.log(param.id, param.url)
  }

  @Post(':name/chats')
  postChat() {

  }

  @Get(':name/members')
  getAllMembers(){

  }

  @Post(':name/members')
  inviteMembers(){

  }
}
