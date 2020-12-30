import { Controller, Get, Post, Body } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getArticles() {
    return this.articleService.findAll();
  }

  @Post()
  createArticle(@Body() body: Article) {
    return this.articleService.create(body);
  }
}
