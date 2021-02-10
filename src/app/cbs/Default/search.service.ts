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
    return this.entity().asModel<SearchResultItemModel<SearchResultItem>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  searchResultItemCollection(models?: Partial<SearchResultItem>[]): SearchResultItemCollection<SearchResultItem, SearchResultItemModel<SearchResultItem>> {
    return this.entities().asCollection<SearchResultItemModel<SearchResultItem>, SearchResultItemCollection<SearchResultItem, SearchResultItemModel<SearchResultItem>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
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
  //#region ODataApi Navigations
  //#endregion
}
