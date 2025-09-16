import { SignInPayload } from './sing-in-payload';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpPayload extends SignInPayload {
  @ApiProperty()
  mail:string;
}