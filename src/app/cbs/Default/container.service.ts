import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  ODataBaseService
} from 'angular-odata';//#endregion

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
export class ContainerService extends ODataBaseService {

  constructor(protected client: ODataClient) {
    super(client, 'ContainerContainer', 'CBS');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getArticlesByTheme(): ODataFunctionResource<{Theme: string}, Article> { 
    return this.client.function<{Theme: string}, Article>('Default.GetArticlesByTheme');
  }
  public callGetArticlesByTheme(Theme: string, options?: HttpFunctionOptions<Article>) {
    return this.callFunction<{Theme: string}, Article>(
      {Theme}, 
      this.getArticlesByTheme(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  public getArticlesBySeries(): ODataFunctionResource<{Series: string}, Article> { 
    return this.client.function<{Series: string}, Article>('Default.GetArticlesBySeries');
  }
  public callGetArticlesBySeries(Series: string, options?: HttpFunctionOptions<Article>) {
    return this.callFunction<{Series: string}, Article>(
      {Series}, 
      this.getArticlesBySeries(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  public getArticlesByTaxonomyTag(): ODataFunctionResource<{Tag: string}, Article> { 
    return this.client.function<{Tag: string}, Article>('Default.GetArticlesByTaxonomyTag');
  }
  public callGetArticlesByTaxonomyTag(Tag: string, options?: HttpFunctionOptions<Article>) {
    return this.callFunction<{Tag: string}, Article>(
      {Tag}, 
      this.getArticlesByTaxonomyTag(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  public getArticlesByArticleType(): ODataFunctionResource<{ArticleType: ArticleType}, Article> { 
    return this.client.function<{ArticleType: ArticleType}, Article>('Default.GetArticlesByArticleType');
  }
  public callGetArticlesByArticleType(ArticleType: ArticleType, options?: HttpFunctionOptions<Article>) {
    return this.callFunction<{ArticleType: ArticleType}, Article>(
      {ArticleType}, 
      this.getArticlesByArticleType(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  public getArticlesByTableId(): ODataFunctionResource<{TableId: string}, Article> { 
    return this.client.function<{TableId: string}, Article>('Default.GetArticlesByTableId');
  }
  public callGetArticlesByTableId(TableId: string, options?: HttpFunctionOptions<Article>) {
    return this.callFunction<{TableId: string}, Article>(
      {TableId}, 
      this.getArticlesByTableId(), 
      'entities', options) as Observable<ODataEntities<Article>>;
  }
  public getMediaByMediaType(): ODataFunctionResource<{MediaType: MediaType}, Medium> { 
    return this.client.function<{MediaType: MediaType}, Medium>('Default.GetMediaByMediaType');
  }
  public callGetMediaByMediaType(MediaType: MediaType, options?: HttpFunctionOptions<Medium>) {
    return this.callFunction<{MediaType: MediaType}, Medium>(
      {MediaType}, 
      this.getMediaByMediaType(), 
      'entities', options) as Observable<ODataEntities<Medium>>;
  }
  public getPagesByTheme(): ODataFunctionResource<{Theme: string}, Page> { 
    return this.client.function<{Theme: string}, Page>('Default.GetPagesByTheme');
  }
  public callGetPagesByTheme(Theme: string, options?: HttpFunctionOptions<Page>) {
    return this.callFunction<{Theme: string}, Page>(
      {Theme}, 
      this.getPagesByTheme(), 
      'entities', options) as Observable<ODataEntities<Page>>;
  }
  public getPagesBySeries(): ODataFunctionResource<{Series: string}, Page> { 
    return this.client.function<{Series: string}, Page>('Default.GetPagesBySeries');
  }
  public callGetPagesBySeries(Series: string, options?: HttpFunctionOptions<Page>) {
    return this.callFunction<{Series: string}, Page>(
      {Series}, 
      this.getPagesBySeries(), 
      'entities', options) as Observable<ODataEntities<Page>>;
  }
  public getPagesByTaxonomyTag(): ODataFunctionResource<{Tag: string}, Page> { 
    return this.client.function<{Tag: string}, Page>('Default.GetPagesByTaxonomyTag');
  }
  public callGetPagesByTaxonomyTag(Tag: string, options?: HttpFunctionOptions<Page>) {
    return this.callFunction<{Tag: string}, Page>(
      {Tag}, 
      this.getPagesByTaxonomyTag(), 
      'entities', options) as Observable<ODataEntities<Page>>;
  }
  public getPagesByPageType(): ODataFunctionResource<{PageType: PageType}, Page> { 
    return this.client.function<{PageType: PageType}, Page>('Default.GetPagesByPageType');
  }
  public callGetPagesByPageType(PageType: PageType, options?: HttpFunctionOptions<Page>) {
    return this.callFunction<{PageType: PageType}, Page>(
      {PageType}, 
      this.getPagesByPageType(), 
      'entities', options) as Observable<ODataEntities<Page>>;
  }
  public getSearchResultsByTheme(): ODataFunctionResource<{Theme: string}, SearchResultItem> { 
    return this.client.function<{Theme: string}, SearchResultItem>('Default.GetSearchResultsByTheme');
  }
  public callGetSearchResultsByTheme(Theme: string, options?: HttpFunctionOptions<SearchResultItem>) {
    return this.callFunction<{Theme: string}, SearchResultItem>(
      {Theme}, 
      this.getSearchResultsByTheme(), 
      'entities', options) as Observable<ODataEntities<SearchResultItem>>;
  }
  public getSearchResultsByTemplate(): ODataFunctionResource<{Template: string}, SearchResultItem> { 
    return this.client.function<{Template: string}, SearchResultItem>('Default.GetSearchResultsByTemplate');
  }
  public callGetSearchResultsByTemplate(Template: string, options?: HttpFunctionOptions<SearchResultItem>) {
    return this.callFunction<{Template: string}, SearchResultItem>(
      {Template}, 
      this.getSearchResultsByTemplate(), 
      'entities', options) as Observable<ODataEntities<SearchResultItem>>;
  }
  public getSearchResultsByArticleType(): ODataFunctionResource<{ArticleType: ArticleType}, SearchResultItem> { 
    return this.client.function<{ArticleType: ArticleType}, SearchResultItem>('Default.GetSearchResultsByArticleType');
  }
  public callGetSearchResultsByArticleType(ArticleType: ArticleType, options?: HttpFunctionOptions<SearchResultItem>) {
    return this.callFunction<{ArticleType: ArticleType}, SearchResultItem>(
      {ArticleType}, 
      this.getSearchResultsByArticleType(), 
      'entities', options) as Observable<ODataEntities<SearchResultItem>>;
  }
  public getSearchResultsByWord(): ODataFunctionResource<{Word: string}, SearchResultItem> { 
    return this.client.function<{Word: string}, SearchResultItem>('Default.GetSearchResultsByWord');
  }
  public callGetSearchResultsByWord(Word: string, options?: HttpFunctionOptions<SearchResultItem>) {
    return this.callFunction<{Word: string}, SearchResultItem>(
      {Word}, 
      this.getSearchResultsByWord(), 
      'entities', options) as Observable<ODataEntities<SearchResultItem>>;
  }
  public getSearchResultsByWordAndTemplateId(): ODataFunctionResource<{Word: string, TemplateId: string}, SearchResultItem> { 
    return this.client.function<{Word: string, TemplateId: string}, SearchResultItem>('Default.GetSearchResultsByWordAndTemplateId');
  }
  public callGetSearchResultsByWordAndTemplateId(Word: string, TemplateId: string, options?: HttpFunctionOptions<SearchResultItem>) {
    return this.callFunction<{Word: string, TemplateId: string}, SearchResultItem>(
      {Word, TemplateId}, 
      this.getSearchResultsByWordAndTemplateId(), 
      'entities', options) as Observable<ODataEntities<SearchResultItem>>;
  }
  public getSearchResultsByPath(): ODataFunctionResource<{Path: string}, SearchResultItem> { 
    return this.client.function<{Path: string}, SearchResultItem>('Default.GetSearchResultsByPath');
  }
  public callGetSearchResultsByPath(Path: string, options?: HttpFunctionOptions<SearchResultItem>) {
    return this.callFunction<{Path: string}, SearchResultItem>(
      {Path}, 
      this.getSearchResultsByPath(), 
      'entities', options) as Observable<ODataEntities<SearchResultItem>>;
  }
  public getSearchResultsByPathAndTemplateId(): ODataFunctionResource<{Path: string, TemplateId: string}, SearchResultItem> { 
    return this.client.function<{Path: string, TemplateId: string}, SearchResultItem>('Default.GetSearchResultsByPathAndTemplateId');
  }
  public callGetSearchResultsByPathAndTemplateId(Path: string, TemplateId: string, options?: HttpFunctionOptions<SearchResultItem>) {
    return this.callFunction<{Path: string, TemplateId: string}, SearchResultItem>(
      {Path, TemplateId}, 
      this.getSearchResultsByPathAndTemplateId(), 
      'entities', options) as Observable<ODataEntities<SearchResultItem>>;
  }
  //#endregion
}