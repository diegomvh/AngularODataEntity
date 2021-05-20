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
import { PageType } from '../CBS/Website/ODataApi/Models/pagetype.enum';
import { LinkList } from '../CBS/Website/ODataApi/Models/linklist.complex';
import { Page } from '../CBS/Website/ODataApi/Models/page.entity';
import { LinkListModel } from '../CBS/Website/ODataApi/Models/linklist.model';
import { PageModel } from '../CBS/Website/ODataApi/Models/page.model';
import { LinkListCollection } from '../CBS/Website/ODataApi/Models/linklist.collection';
import { PageCollection } from '../CBS/Website/ODataApi/Models/page.collection';
//#endregion

@Injectable()
export class PagesService extends ODataEntitySetService<Page> {
  constructor(protected client: ODataClient) {
    super(client, 'Pages', 'CBS.Website.ODataApi.Models.Page');
  }

  //#region ODataApi Model
  pageModel(attrs?: Partial<Page>): PageModel<Page> {
    return this.entity().asModel<PageModel<Page>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  pageCollection(models?: Partial<Page>[]): PageCollection<Page, PageModel<Page>> {
    return this.entities().asCollection<PageModel<Page>, PageCollection<Page, PageModel<Page>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
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
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
