import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { json } from 'stream/consumers';
import { UserDataDto } from './dto/UserDataDto';

@Injectable()
export class UserService {
  getUser(): string {
    return 'Hello From User 003!';
  }

  async createUser(createCatDto:UserDataDto):Promise<UserDataDto>{
    return await createCatDto
  }
}
