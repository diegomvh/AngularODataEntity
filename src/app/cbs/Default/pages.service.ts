import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
  //#region ODataApiGen Model
  pageModel(attrs?: Partial<Page>): PageModel<Page> {
    return this.entity().asModel<PageModel<Page>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  pageCollection(models?: Partial<Page>[]): PageCollection<Page, PageModel<Page>> {
    return this.entities().asCollection<PageModel<Page>, PageCollection<Page, PageModel<Page>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  public getPagesByTheme(): ODataFunctionResource<{Theme: string}, Page> { 
    return this.client.function<{Theme: string}, Page>('Default.GetPagesByTheme', this.apiNameOrEntityType);
  }
  public callGetPagesByTheme(Theme: string, options?: ODataQueryArgumentsOptions<Page>) {
    return this.callFunction<{Theme: string}, Page>(
      {Theme}, 
      this.getPagesByTheme(), 
      'entities', options) as Observable<ODataEntities<Page>>;
  }
  public getPagesBySeries(): ODataFunctionResource<{Series: string}, Page> { 
    return this.client.function<{Series: string}, Page>('Default.GetPagesBySeries', this.apiNameOrEntityType);
  }
  public callGetPagesBySeries(Series: string, options?: ODataQueryArgumentsOptions<Page>) {
    return this.callFunction<{Series: string}, Page>(
      {Series}, 
      this.getPagesBySeries(), 
      'entities', options) as Observable<ODataEntities<Page>>;
  }
  public getPagesByTaxonomyTag(): ODataFunctionResource<{Tag: string}, Page> { 
    return this.client.function<{Tag: string}, Page>('Default.GetPagesByTaxonomyTag', this.apiNameOrEntityType);
  }
  public callGetPagesByTaxonomyTag(Tag: string, options?: ODataQueryArgumentsOptions<Page>) {
    return this.callFunction<{Tag: string}, Page>(
      {Tag}, 
      this.getPagesByTaxonomyTag(), 
      'entities', options) as Observable<ODataEntities<Page>>;
  }
  public getPagesByPageType(): ODataFunctionResource<{PageType: PageType}, Page> { 
    return this.client.function<{PageType: PageType}, Page>('Default.GetPagesByPageType', this.apiNameOrEntityType);
  }
  public callGetPagesByPageType(PageType: PageType, options?: ODataQueryArgumentsOptions<Page>) {
    return this.callFunction<{PageType: PageType}, Page>(
      {PageType}, 
      this.getPagesByPageType(), 
      'entities', options) as Observable<ODataEntities<Page>>;
  }
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}
