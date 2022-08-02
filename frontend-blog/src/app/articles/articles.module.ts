import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [ArticleListComponent, ArticleDetailsComponent, LatestArticleComponent, FeaturedArticlesComponent, CategoriesComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  exports:[LatestArticleComponent]
})
export class ArticlesModule { }
