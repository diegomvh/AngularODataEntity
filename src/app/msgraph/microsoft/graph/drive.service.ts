import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataSingletonService, 
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
import { List } from './list.entity';
import { IdentitySetModel } from './identityset.model';
import { QuotaModel } from './quota.model';
import { SharepointIdsModel } from './sharepointids.model';
import { SystemFacetModel } from './systemfacet.model';
import { DriveModel } from './drive.model';
import { DriveItemModel } from './driveitem.model';
import { ListModel } from './list.model';
import { IdentitySetCollection } from './identityset.collection';
import { QuotaCollection } from './quota.collection';
import { SharepointIdsCollection } from './sharepointids.collection';
import { SystemFacetCollection } from './systemfacet.collection';
import { DriveCollection } from './drive.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ListCollection } from './list.collection';
//#endregion

@Injectable()
export class DriveService extends ODataSingletonService<Drive> {
  constructor(protected client: ODataClient) {
    super(client, 'drive', 'microsoft.graph.drive');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}