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
import { SharedDriveItem } from './shareddriveitem.entity';
import { IdentitySetModel } from './identityset.model';
import { SharedDriveItemModel } from './shareddriveitem.model';
import { IdentitySetCollection } from './identityset.collection';
import { SharedDriveItemCollection } from './shareddriveitem.collection';
//#endregion

@Injectable()
export class SharesService extends ODataEntityService<SharedDriveItem> {
  constructor(protected client: ODataClient) {
    super(client, 'shares', 'microsoft.graph.sharedDriveItem');
  }

  //#region ODataApi Model
  sharedDriveItemModel(): SharedDriveItemModel<SharedDriveItem> {
    return this.entity().asModel() as SharedDriveItemModel<SharedDriveItem>;
  }
  //#endregion
  //#region ODataApi Collection
  sharedDriveItemCollection(): SharedDriveItemCollection<SharedDriveItem, SharedDriveItemModel<SharedDriveItem>> {
    return this.entities().asCollection() as SharedDriveItemCollection<SharedDriveItem, SharedDriveItemModel<SharedDriveItem>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
