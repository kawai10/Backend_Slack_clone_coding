import { PickType } from "@nestjs/swagger";
import { ChannelChats } from "../../entities/ChannelChats";

export class PostChatsDto extends PickType(ChannelChats, ['content']){

}