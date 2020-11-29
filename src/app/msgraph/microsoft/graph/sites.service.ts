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
import { SharepointIds } from './sharepointids.complex';
import { Root } from './root.complex';
import { PublicError } from './publicerror.complex';
import { SiteCollection } from './sitecollection.complex';
import { Site } from './site.entity';
import { ItemActivityStat } from './itemactivitystat.entity';
import { SharepointIdsModel } from './sharepointids.model';
import { RootModel } from './root.model';
import { PublicErrorModel } from './publicerror.model';
import { SiteCollectionModel } from './sitecollection.model';
import { SiteModel } from './site.model';
import { ItemActivityStatModel } from './itemactivitystat.model';
import { SharepointIdsCollection } from './sharepointids.collection';
import { RootCollection } from './root.collection';
import { PublicErrorCollection } from './publicerror.collection';
import { SiteCollectionCollection } from './sitecollection.collection';
import { SiteCollection as EcstaticLovelace } from './site.collection';
import { ItemActivityStatCollection } from './itemactivitystat.collection';
//#endregion

@Injectable()
export class SitesService extends ODataEntityService<Site> {
  constructor(protected client: ODataClient) {
    super(client, 'sites', 'microsoft.graph.site');
  }

  //#region ODataApi Model
  siteModel(): SiteModel<Site> {
    return this.entity().asModel() as SiteModel<Site>;
  }
  //#endregion
  //#region ODataApi Collection
  siteCollection(): EcstaticLovelace<Site, SiteModel<Site>> {
    return this.entities().asCollection() as EcstaticLovelace<Site, SiteModel<Site>>;
  }
  //#endregion
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
