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
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ArticleType } from '../CBS/Website/ODataApi/Models/articletype.enum';
import { SearchResultItem } from '../CBS/Website/ODataApi/Models/searchresultitem.entity';
import { SearchResultItemModel } from '../CBS/Website/ODataApi/Models/searchresultitem.model';
import { SearchResultItemCollection } from '../CBS/Website/ODataApi/Models/searchresultitem.collection';
//#endregion

@Injectable()
export class SearchService extends ODataEntitySetService<SearchResultItem> {
  constructor(protected client: ODataClient) {
    super(client, 'Search', 'CBS.Website.ODataApi.Models.SearchResultItem');
  }
  //#region ODataApi Model
  searchResultItemModel(attrs?: Partial<SearchResultItem>): SearchResultItemModel<SearchResultItem> {
    return this.entity().asModel<SearchResultItemModel<SearchResultItem>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  searchResultItemCollection(models?: Partial<SearchResultItem>[]): SearchResultItemCollection<SearchResultItem, SearchResultItemModel<SearchResultItem>> {
    return this.entities().asCollection<SearchResultItemModel<SearchResultItem>, SearchResultItemCollection<SearchResultItem, SearchResultItemModel<SearchResultItem>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
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
  //#region ODataApi Navigations
  //#endregion
}
