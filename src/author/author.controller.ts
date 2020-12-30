import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  getAuthors() {
    return this.authorService.findAll();
  }

  @Post()
  createAuthor(@Body() body: Author) {
    return this.authorService.create(body);
  }
}
