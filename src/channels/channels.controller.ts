import { Body, Controller, Get, Injectable, Param, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PostChatsDto } from "./dto/post-chats.dto";
import { ChannelsService } from "./channels.service";

@ApiTags('Channel')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {

  constructor(
    private channelsService:ChannelsService
  ) {
  }

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
  postChat(
    @Param('url') url:string,
    @Param('name') name:string,
    @Body() body: PostChatsDto,
    @Body() user,
  ) {
    return this.channelsService.postChat(
      {
        url,
        content: body.content,
        name,
        myId: user.id
      }
    )
  }

  @Get(':name/members')
  getAllMembers(){

  }

  @Post(':name/members')
  inviteMembers(){

  }
}
