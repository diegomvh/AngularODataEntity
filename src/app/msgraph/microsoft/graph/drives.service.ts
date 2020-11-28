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
import { IdentitySet } from './identityset.complex';
import { Quota } from './quota.complex';
import { SharepointIds } from './sharepointids.complex';
import { SystemFacet } from './systemfacet.complex';
import { Drive } from './drive.entity';
import { DriveItem } from './driveitem.entity';
import { IdentitySetModel } from './identityset.model';
import { QuotaModel } from './quota.model';
import { SharepointIdsModel } from './sharepointids.model';
import { SystemFacetModel } from './systemfacet.model';
import { DriveModel } from './drive.model';
import { DriveItemModel } from './driveitem.model';
import { IdentitySetCollection } from './identityset.collection';
import { QuotaCollection } from './quota.collection';
import { SharepointIdsCollection } from './sharepointids.collection';
import { SystemFacetCollection } from './systemfacet.collection';
import { DriveCollection } from './drive.collection';
import { DriveItemCollection } from './driveitem.collection';
//#endregion

@Injectable()
export class DrivesService extends ODataEntityService<Drive> {
  constructor(protected client: ODataClient) {
    super(client, 'drives', 'microsoft.graph.drive');
  }

  //#region ODataApi Model
  driveModel(): DriveModel<Drive> {
    return this.entity().asModel() as DriveModel<Drive>;
  }
  //#endregion
  //#region ODataApi Collection
  driveCollection(): DriveCollection<Drive, DriveModel<Drive>> {
    return this.entities().asCollection() as DriveCollection<Drive, DriveModel<Drive>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public search(entity: EntityKey<Drive>): ODataFunctionResource<{q: string}, DriveItem> {
    const resource = this.entity(entity).function<{q: string}, DriveItem>('microsoft.graph.search');
    return resource;
  }
  public recent(entity: EntityKey<Drive>): ODataFunctionResource<null, DriveItem> {
    const resource = this.entity(entity).function<null, DriveItem>('microsoft.graph.recent');
    return resource;
  }
  public sharedWithMe(entity: EntityKey<Drive>): ODataFunctionResource<null, DriveItem> {
    const resource = this.entity(entity).function<null, DriveItem>('microsoft.graph.sharedWithMe');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
