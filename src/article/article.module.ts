import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './article.controller';
import { Article } from './article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
