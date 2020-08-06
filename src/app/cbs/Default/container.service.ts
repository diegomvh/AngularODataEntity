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
//#endregion

@Injectable()
export class ContainerService {
 
  constructor(protected client: ODataClient) { }

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
  public getMediaByMediaType(): ODataFunctionResource<{MediaType: MediaType}, Medium> {
    const resource = this.client.function<{MediaType: MediaType}, Medium>('Default.GetMediaByMediaType');
    return resource;
  }
  public getPagesByTheme(): ODataFunctionResource<{Theme: string}, Page> {
    const resource = this.client.function<{Theme: string}, Page>('Default.GetPagesByTheme');
    return resource;
  }
  public getPagesBySeries(): ODataFunctionResource<{Series: string}, Page> {
    const resource = this.client.function<{Series: string}, Page>('Default.GetPagesBySeries');
    return resource;
  }
  public getPagesByTaxonomyTag(): ODataFunctionResource<{Tag: string}, Page> {
    const resource = this.client.function<{Tag: string}, Page>('Default.GetPagesByTaxonomyTag');
    return resource;
  }
  public getPagesByPageType(): ODataFunctionResource<{PageType: PageType}, Page> {
    const resource = this.client.function<{PageType: PageType}, Page>('Default.GetPagesByPageType');
    return resource;
  }
  public getSearchResultsByTheme(): ODataFunctionResource<{Theme: string}, SearchResultItem> {
    const resource = this.client.function<{Theme: string}, SearchResultItem>('Default.GetSearchResultsByTheme');
    return resource;
  }
  public getSearchResultsByTemplate(): ODataFunctionResource<{Template: string}, SearchResultItem> {
    const resource = this.client.function<{Template: string}, SearchResultItem>('Default.GetSearchResultsByTemplate');
    return resource;
  }
  public getSearchResultsByArticleType(): ODataFunctionResource<{ArticleType: ArticleType}, SearchResultItem> {
    const resource = this.client.function<{ArticleType: ArticleType}, SearchResultItem>('Default.GetSearchResultsByArticleType');
    return resource;
  }
  public getSearchResultsByWord(): ODataFunctionResource<{Word: string}, SearchResultItem> {
    const resource = this.client.function<{Word: string}, SearchResultItem>('Default.GetSearchResultsByWord');
    return resource;
  }
  public getSearchResultsByWordAndTemplateId(): ODataFunctionResource<{Word: string, TemplateId: string}, SearchResultItem> {
    const resource = this.client.function<{Word: string, TemplateId: string}, SearchResultItem>('Default.GetSearchResultsByWordAndTemplateId');
    return resource;
  }
  public getSearchResultsByPath(): ODataFunctionResource<{Path: string}, SearchResultItem> {
    const resource = this.client.function<{Path: string}, SearchResultItem>('Default.GetSearchResultsByPath');
    return resource;
  }
  public getSearchResultsByPathAndTemplateId(): ODataFunctionResource<{Path: string, TemplateId: string}, SearchResultItem> {
    const resource = this.client.function<{Path: string, TemplateId: string}, SearchResultItem>('Default.GetSearchResultsByPathAndTemplateId');
    return resource;
  }
  //#endregion
}