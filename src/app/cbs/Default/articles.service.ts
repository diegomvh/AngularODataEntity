import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpQueryOptions
} from 'angular-odata';//#endregion

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
  }//#endregion
  //#region ODataApi Collection
  articleCollection(models?: Partial<Article>[]): ArticleCollection<Article, ArticleModel<Article>> {
    return this.entities().asCollection<ArticleModel<Article>, ArticleCollection<Article, ArticleModel<Article>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getArticlesByTheme(): ODataFunctionResource<{Theme: string}, Article> { 
    return this.client.function<{Theme: string}, Article>('Default.GetArticlesByTheme', this.apiNameOrEntityType);
  }
  public callGetArticlesByTheme(Theme: string, options?: HttpQueryOptions<Article>) {
    return this.callFunction<{Theme: string}, Article>(
      {Theme}, 
      this.getArticlesByTheme(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  public getArticlesBySeries(): ODataFunctionResource<{Series: string}, Article> { 
    return this.client.function<{Series: string}, Article>('Default.GetArticlesBySeries', this.apiNameOrEntityType);
  }
  public callGetArticlesBySeries(Series: string, options?: HttpQueryOptions<Article>) {
    return this.callFunction<{Series: string}, Article>(
      {Series}, 
      this.getArticlesBySeries(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  public getArticlesByTaxonomyTag(): ODataFunctionResource<{Tag: string}, Article> { 
    return this.client.function<{Tag: string}, Article>('Default.GetArticlesByTaxonomyTag', this.apiNameOrEntityType);
  }
  public callGetArticlesByTaxonomyTag(Tag: string, options?: HttpQueryOptions<Article>) {
    return this.callFunction<{Tag: string}, Article>(
      {Tag}, 
      this.getArticlesByTaxonomyTag(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  public getArticlesByArticleType(): ODataFunctionResource<{ArticleType: ArticleType}, Article> { 
    return this.client.function<{ArticleType: ArticleType}, Article>('Default.GetArticlesByArticleType', this.apiNameOrEntityType);
  }
  public callGetArticlesByArticleType(ArticleType: ArticleType, options?: HttpQueryOptions<Article>) {
    return this.callFunction<{ArticleType: ArticleType}, Article>(
      {ArticleType}, 
      this.getArticlesByArticleType(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  public getArticlesByTableId(): ODataFunctionResource<{TableId: string}, Article> { 
    return this.client.function<{TableId: string}, Article>('Default.GetArticlesByTableId', this.apiNameOrEntityType);
  }
  public callGetArticlesByTableId(TableId: string, options?: HttpQueryOptions<Article>) {
    return this.callFunction<{TableId: string}, Article>(
      {TableId}, 
      this.getArticlesByTableId(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
