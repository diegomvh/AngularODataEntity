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
  HttpOptions,
  Expand,
  Select,
  ODataBaseService
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
export class ContainerService extends ODataBaseService {

  constructor(protected client: ODataClient) {
    super(client, 'ContainerContainer', '');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getArticlesByTheme(Theme: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Theme: string}, Article>(
      {Theme}, 
      this.client.function<{Theme: string}, Article>('Default.GetArticlesByTheme'), 
      'entities', {alias, ...options}) as Observable<Article[] | null>;
  }
  public getArticlesBySeries(Series: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Series: string}, Article>(
      {Series}, 
      this.client.function<{Series: string}, Article>('Default.GetArticlesBySeries'), 
      'entities', {alias, ...options}) as Observable<Article[] | null>;
  }
  public getArticlesByTaxonomyTag(Tag: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Tag: string}, Article>(
      {Tag}, 
      this.client.function<{Tag: string}, Article>('Default.GetArticlesByTaxonomyTag'), 
      'entities', {alias, ...options}) as Observable<Article[] | null>;
  }
  public getArticlesByArticleType(ArticleType: ArticleType, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{ArticleType: ArticleType}, Article>(
      {ArticleType}, 
      this.client.function<{ArticleType: ArticleType}, Article>('Default.GetArticlesByArticleType'), 
      'entities', {alias, ...options}) as Observable<Article[] | null>;
  }
  public getArticlesByTableId(TableId: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{TableId: string}, Article>(
      {TableId}, 
      this.client.function<{TableId: string}, Article>('Default.GetArticlesByTableId'), 
      'entities', {alias, ...options}) as Observable<Article[] | null>;
  }
  public getMediaByMediaType(MediaType: MediaType, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{MediaType: MediaType}, Medium>(
      {MediaType}, 
      this.client.function<{MediaType: MediaType}, Medium>('Default.GetMediaByMediaType'), 
      'entities', {alias, ...options}) as Observable<Medium[] | null>;
  }
  public getPagesByTheme(Theme: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Theme: string}, Page>(
      {Theme}, 
      this.client.function<{Theme: string}, Page>('Default.GetPagesByTheme'), 
      'entities', {alias, ...options}) as Observable<Page[] | null>;
  }
  public getPagesBySeries(Series: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Series: string}, Page>(
      {Series}, 
      this.client.function<{Series: string}, Page>('Default.GetPagesBySeries'), 
      'entities', {alias, ...options}) as Observable<Page[] | null>;
  }
  public getPagesByTaxonomyTag(Tag: string, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{Tag: string}, Page>(
      {Tag}, 
      this.client.function<{Tag: string}, Page>('Default.GetPagesByTaxonomyTag'), 
      'entities', {alias, ...options}) as Observable<Page[] | null>;
  }
  public getPagesByPageType(PageType: PageType, {alias, ...options}: {alias?: boolean} & HttpOptions = {}) {
    return this.callFunction<{PageType: PageType}, Page>(
      {PageType}, 
      this.client.function<{PageType: PageType}, Page>('Default.GetPagesByPageType'), 
      'entities', {alias, ...options}) as Observable<Page[] | null>;
  }
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
}