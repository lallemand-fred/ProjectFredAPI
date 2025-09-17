import { Injectable, Logger } from '@nestjs/common';
import { Credentials } from './data';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenService } from './jwt/token.service';

@Injectable()
export class SecurityService {
  private readonly logger = new Logger(SecurityService.name);
  constructor(
    @InjectRepository(Credentials)
    private readonly repository: Repository<Credentials>,
    private readonly tokenService: TokenService,
  ) {}
}
