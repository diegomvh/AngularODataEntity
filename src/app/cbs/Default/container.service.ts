import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
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
import { MediaType } from '../CBS/Website/ODataApi/Models/mediatype.enum';
import { PageType } from '../CBS/Website/ODataApi/Models/pagetype.enum';
import { Article } from '../CBS/Website/ODataApi/Models/article.entity';
import { Medium } from '../CBS/Website/ODataApi/Models/medium.entity';
import { Page } from '../CBS/Website/ODataApi/Models/page.entity';
import { SearchResultItem } from '../CBS/Website/ODataApi/Models/searchresultitem.entity';
import { ArticleModel } from '../CBS/Website/ODataApi/Models/article.model';
import { MediumModel } from '../CBS/Website/ODataApi/Models/medium.model';
import { PageModel } from '../CBS/Website/ODataApi/Models/page.model';
import { SearchResultItemModel } from '../CBS/Website/ODataApi/Models/searchresultitem.model';
import { ArticleCollection } from '../CBS/Website/ODataApi/Models/article.collection';
import { MediumCollection } from '../CBS/Website/ODataApi/Models/medium.collection';
import { PageCollection } from '../CBS/Website/ODataApi/Models/page.collection';
import { SearchResultItemCollection } from '../CBS/Website/ODataApi/Models/searchresultitem.collection';
//#endregion

@Injectable()
export class ContainerService {
 
  constructor(protected client: ODataClient) { }

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
  public getMediaByMediaType(MediaType: MediaType, options?: HttpOptions) {
    return this.client.function<{MediaType: MediaType}, Medium>('Default.GetMediaByMediaType')
      .callEntities({MediaType}, options) as Observable<Medium[] | null>;
  }
  public getPagesByTheme(Theme: string, options?: HttpOptions) {
    return this.client.function<{Theme: string}, Page>('Default.GetPagesByTheme')
      .callEntities({Theme}, options) as Observable<Page[] | null>;
  }
  public getPagesBySeries(Series: string, options?: HttpOptions) {
    return this.client.function<{Series: string}, Page>('Default.GetPagesBySeries')
      .callEntities({Series}, options) as Observable<Page[] | null>;
  }
  public getPagesByTaxonomyTag(Tag: string, options?: HttpOptions) {
    return this.client.function<{Tag: string}, Page>('Default.GetPagesByTaxonomyTag')
      .callEntities({Tag}, options) as Observable<Page[] | null>;
  }
  public getPagesByPageType(PageType: PageType, options?: HttpOptions) {
    return this.client.function<{PageType: PageType}, Page>('Default.GetPagesByPageType')
      .callEntities({PageType}, options) as Observable<Page[] | null>;
  }
  public getSearchResultsByTheme(Theme: string, options?: HttpOptions) {
    return this.client.function<{Theme: string}, SearchResultItem>('Default.GetSearchResultsByTheme')
      .callEntities({Theme}, options) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByTemplate(Template: string, options?: HttpOptions) {
    return this.client.function<{Template: string}, SearchResultItem>('Default.GetSearchResultsByTemplate')
      .callEntities({Template}, options) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByArticleType(ArticleType: ArticleType, options?: HttpOptions) {
    return this.client.function<{ArticleType: ArticleType}, SearchResultItem>('Default.GetSearchResultsByArticleType')
      .callEntities({ArticleType}, options) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByWord(Word: string, options?: HttpOptions) {
    return this.client.function<{Word: string}, SearchResultItem>('Default.GetSearchResultsByWord')
      .callEntities({Word}, options) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByWordAndTemplateId(Word: string, TemplateId: string, options?: HttpOptions) {
    return this.client.function<{Word: string, TemplateId: string}, SearchResultItem>('Default.GetSearchResultsByWordAndTemplateId')
      .callEntities({Word, TemplateId}, options) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByPath(Path: string, options?: HttpOptions) {
    return this.client.function<{Path: string}, SearchResultItem>('Default.GetSearchResultsByPath')
      .callEntities({Path}, options) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByPathAndTemplateId(Path: string, TemplateId: string, options?: HttpOptions) {
    return this.client.function<{Path: string, TemplateId: string}, SearchResultItem>('Default.GetSearchResultsByPathAndTemplateId')
      .callEntities({Path, TemplateId}, options) as Observable<SearchResultItem[] | null>;
  }
  //#endregion
}