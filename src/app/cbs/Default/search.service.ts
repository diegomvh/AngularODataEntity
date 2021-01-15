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
    return this.entity().asModel(attrs || {}) as SearchResultItemModel<SearchResultItem>;
  }
  //#endregion
  //#region ODataApi Collection
  searchResultItemCollection(models?: Partial<SearchResultItem>[]): SearchResultItemCollection<SearchResultItem, SearchResultItemModel<SearchResultItem>> {
    return this.entities().asCollection(models || []) as SearchResultItemCollection<SearchResultItem, SearchResultItemModel<SearchResultItem>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
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
  //#region ODataApi Navigations
  //#endregion
}
