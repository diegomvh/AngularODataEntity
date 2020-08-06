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
import { IdentitySet } from './identityset.entity';
import { SharepointIds } from './sharepointids.entity';
import { SystemFacet } from './systemfacet.entity';
import { Quota } from './quota.entity';
import { User } from './user.entity';
import { Drive } from './drive.entity';
import { DriveItem } from './driveitem.entity';
//#endregion

@Injectable()
export class DrivesService extends ODataEntityService<Drive> {
  constructor(protected client: ODataClient) {
    super(client, 'drives', 'microsoft.graph.drive');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public recent(entity: EntityKey<Drive>): ODataFunctionResource<null, DriveItem> {
    const resource = this.entity(entity).function<null, DriveItem>('microsoft.graph.recent');
    return resource;
  }
  public search(entity: EntityKey<Drive>): ODataFunctionResource<{q: string}, DriveItem> {
    const resource = this.entity(entity).function<{q: string}, DriveItem>('microsoft.graph.search');
    return resource;
  }
  public sharedWithMe(entity: EntityKey<Drive>): ODataFunctionResource<null, DriveItem> {
    const resource = this.entity(entity).function<null, DriveItem>('microsoft.graph.sharedWithMe');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  public createdByUser(entity: EntityKey<Drive>): ODataNavigationPropertyResource<User> {
    return this.entity(entity).navigationProperty<User>('items/createdByUser');
  }
  public lastModifiedByUser(entity: EntityKey<Drive>): ODataNavigationPropertyResource<User> {
    return this.entity(entity).navigationProperty<User>('items/lastModifiedByUser');
  }
  //#endregion
}
