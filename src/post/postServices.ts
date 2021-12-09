import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class PostService {
  async getAllPost() {
    return await 'Hello I am from post.';
  }

  async getPostById(@Param('id') id: string) {
    return await 'Hello from by Id.';
  }
}
