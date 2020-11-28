import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
export class ArticlesService extends ODataEntityService<Article> {
  constructor(protected client: ODataClient) {
    super(client, 'Articles', 'CBS.Website.ODataApi.Models.Article');
  }

  //#region ODataApi Model
  articleModel(): ArticleModel<Article> {
    return this.entity().asModel() as ArticleModel<Article>;
  }
  //#endregion
  //#region ODataApi Collection
  articleCollection(): ArticleCollection<Article, ArticleModel<Article>> {
    return this.entities().asCollection() as ArticleCollection<Article, ArticleModel<Article>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getArticlesByTheme(): ODataFunctionResource<{Theme: string}, Article> {
    const resource = this.client.function<{Theme: string}, Article>('Default.GetArticlesByTheme');
    return resource;
  }
  public getArticlesBySeries(): ODataFunctionResource<{Series: string}, Article> {
    const resource = this.client.function<{Series: string}, Article>('Default.GetArticlesBySeries');
    return resource;
  }
  public getArticlesByTaxonomyTag(): ODataFunctionResource<{Tag: string}, Article> {
    const resource = this.client.function<{Tag: string}, Article>('Default.GetArticlesByTaxonomyTag');
    return resource;
  }
  public getArticlesByArticleType(): ODataFunctionResource<{ArticleType: ArticleType}, Article> {
    const resource = this.client.function<{ArticleType: ArticleType}, Article>('Default.GetArticlesByArticleType');
    return resource;
  }
  public getArticlesByTableId(): ODataFunctionResource<{TableId: string}, Article> {
    const resource = this.client.function<{TableId: string}, Article>('Default.GetArticlesByTableId');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
