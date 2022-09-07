import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name :'url',
    description:'워크스페이스 url',
    required:true
  })
  @ApiParam({
    name :'id',
    description:'사용자 id',
    required:true
  })
  @ApiQuery({
    name:'perPage',
    description:'한번에 가져오는 개수',
    required:true
  })
  @ApiQuery({
    name:'page',
    description:'불러올 페이지',
    required:true
  })
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page)
    console.log(param.id, param.url)
  }

  @Post(':id/chats')
  postChat() {

  }
}
