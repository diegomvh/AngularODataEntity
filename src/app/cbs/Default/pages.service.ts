import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
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
import { PageType } from '../CBS/Website/ODataApi/Models/pagetype.enum';
import { LinkList } from '../CBS/Website/ODataApi/Models/linklist.entity';
import { Page } from '../CBS/Website/ODataApi/Models/page.entity';
//#endregion

@Injectable()
export class PagesService extends ODataEntityService<Page> {
  constructor(protected client: ODataClient) {
    super(client, 'Pages', 'CBS.Website.ODataApi.Models.Page');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
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
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
