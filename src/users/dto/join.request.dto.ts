import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {
  @ApiProperty({
    example:'test@yopmail.com',
    description:'이메일',
    required: true
  })
  public email: string

  @ApiProperty({
    example:'ted',
    description:'닉네임',
    required: true
  })
  public nickname: string

  @ApiProperty({
    example:'1q2w3e4r',
    description:'비밀번호',
    required: true
  })
  public password: string
}