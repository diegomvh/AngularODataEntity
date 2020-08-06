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
import { PublicError } from './publicerror.entity';
import { Root } from './root.entity';
import { SharepointIds } from './sharepointids.entity';
import { SiteCollection } from './sitecollection.entity';
import { Site } from './site.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
//#endregion

@Injectable()
export class SitesService extends ODataEntityService<Site> {
  constructor(protected client: ODataClient) {
    super(client, 'sites', 'microsoft.graph.site');
  }

  //#region ODataApi Actions
  public add(): ODataActionResource<{value: Site[]}, Site> {
    const resource = this.entities().action<{value: Site[]}, Site>('microsoft.graph.add');
    return resource;
  }
  public remove(): ODataActionResource<{value: Site[]}, Site> {
    const resource = this.entities().action<{value: Site[]}, Site>('microsoft.graph.remove');
    return resource;
  }
  //#endregion
  //#region ODataApi Functions
  public getActivitiesByInterval(entity: EntityKey<Site>): ODataFunctionResource<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat> {
    const resource = this.entity(entity).function<{startDateTime?: string, endDateTime?: string, interval?: string}, ItemActivityStat>('microsoft.graph.getActivitiesByInterval');
    return resource;
  }
  public getByPath(entity: EntityKey<Site>): ODataFunctionResource<{path: string}, Site> {
    const resource = this.entity(entity).function<{path: string}, Site>('microsoft.graph.getByPath');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
