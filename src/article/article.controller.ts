import { Controller } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: Article,
  },
  query: {
    join: {
      author: {
        eager: true,
      },
    },
  },
})
@Controller('articles')
export class ArticleController {
  constructor(public service: ArticleService) {}
}
