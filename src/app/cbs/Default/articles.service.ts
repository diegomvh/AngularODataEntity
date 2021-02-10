import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntitySetService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { ArticleType } from '../CBS/Website/ODataApi/Models/articletype.enum';
import { ErrataList } from '../CBS/Website/ODataApi/Models/erratalist.complex';
import { LinkList } from '../CBS/Website/ODataApi/Models/linklist.complex';
import { Article } from '../CBS/Website/ODataApi/Models/article.entity';
import { ErrataListModel } from '../CBS/Website/ODataApi/Models/erratalist.model';
import { LinkListModel } from '../CBS/Website/ODataApi/Models/linklist.model';
import { ArticleModel } from '../CBS/Website/ODataApi/Models/article.model';
import { ErrataListCollection } from '../CBS/Website/ODataApi/Models/erratalist.collection';
import { LinkListCollection } from '../CBS/Website/ODataApi/Models/linklist.collection';
import { ArticleCollection } from '../CBS/Website/ODataApi/Models/article.collection';
//#endregion

@Injectable()
export class ArticlesService extends ODataEntitySetService<Article> {
  constructor(protected client: ODataClient) {
    super(client, 'Articles', 'CBS.Website.ODataApi.Models.Article');
  }

  //#region ODataApi Model
  articleModel(attrs?: Partial<Article>): ArticleModel<Article> {
    return this.entity().asModel<ArticleModel<Article>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  articleCollection(models?: Partial<Article>[]): ArticleCollection<Article, ArticleModel<Article>> {
    return this.entities().asCollection<ArticleModel<Article>, ArticleCollection<Article, ArticleModel<Article>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getArticlesByTheme(Theme: string, options?: HttpOptions) {
    return this.client.function<{Theme: string}, Article>('Default.GetArticlesByTheme')
      .callEntities({Theme}, options) as Observable<Article[] | null>;
  }
  public getArticlesBySeries(Series: string, options?: HttpOptions) {
    return this.client.function<{Series: string}, Article>('Default.GetArticlesBySeries')
      .callEntities({Series}, options) as Observable<Article[] | null>;
  }
  public getArticlesByTaxonomyTag(Tag: string, options?: HttpOptions) {
    return this.client.function<{Tag: string}, Article>('Default.GetArticlesByTaxonomyTag')
      .callEntities({Tag}, options) as Observable<Article[] | null>;
  }
  public getArticlesByArticleType(ArticleType: ArticleType, options?: HttpOptions) {
    return this.client.function<{ArticleType: ArticleType}, Article>('Default.GetArticlesByArticleType')
      .callEntities({ArticleType}, options) as Observable<Article[] | null>;
  }
  public getArticlesByTableId(TableId: string, options?: HttpOptions) {
    return this.client.function<{TableId: string}, Article>('Default.GetArticlesByTableId')
      .callEntities({TableId}, options) as Observable<Article[] | null>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
