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
  Expand, 
  Select,
  HttpOptions} from 'angular-odata';

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
  public getSearchResultsByTheme(Theme: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Theme: string}, SearchResultItem>(
      {Theme}, 
      this.client.function<{Theme: string}, SearchResultItem>('Default.GetSearchResultsByTheme'), 
      'entities', {alias, ...options}) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByTemplate(Template: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Template: string}, SearchResultItem>(
      {Template}, 
      this.client.function<{Template: string}, SearchResultItem>('Default.GetSearchResultsByTemplate'), 
      'entities', {alias, ...options}) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByArticleType(ArticleType: ArticleType, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{ArticleType: ArticleType}, SearchResultItem>(
      {ArticleType}, 
      this.client.function<{ArticleType: ArticleType}, SearchResultItem>('Default.GetSearchResultsByArticleType'), 
      'entities', {alias, ...options}) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByWord(Word: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Word: string}, SearchResultItem>(
      {Word}, 
      this.client.function<{Word: string}, SearchResultItem>('Default.GetSearchResultsByWord'), 
      'entities', {alias, ...options}) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByWordAndTemplateId(Word: string, TemplateId: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Word: string, TemplateId: string}, SearchResultItem>(
      {Word, TemplateId}, 
      this.client.function<{Word: string, TemplateId: string}, SearchResultItem>('Default.GetSearchResultsByWordAndTemplateId'), 
      'entities', {alias, ...options}) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByPath(Path: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Path: string}, SearchResultItem>(
      {Path}, 
      this.client.function<{Path: string}, SearchResultItem>('Default.GetSearchResultsByPath'), 
      'entities', {alias, ...options}) as Observable<SearchResultItem[] | null>;
  }
  public getSearchResultsByPathAndTemplateId(Path: string, TemplateId: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Path: string, TemplateId: string}, SearchResultItem>(
      {Path, TemplateId}, 
      this.client.function<{Path: string, TemplateId: string}, SearchResultItem>('Default.GetSearchResultsByPathAndTemplateId'), 
      'entities', {alias, ...options}) as Observable<SearchResultItem[] | null>;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
