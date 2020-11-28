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
import { ResourceSpecificPermissionGrant } from './resourcespecificpermissiongrant.entity';
import { ResourceSpecificPermissionGrantModel } from './resourcespecificpermissiongrant.model';
import { ResourceSpecificPermissionGrantCollection } from './resourcespecificpermissiongrant.collection';
//#endregion

@Injectable()
export class PermissionGrantsService extends ODataEntityService<ResourceSpecificPermissionGrant> {
  constructor(protected client: ODataClient) {
    super(client, 'permissionGrants', 'microsoft.graph.resourceSpecificPermissionGrant');
  }

  //#region ODataApi Model
  resourceSpecificPermissionGrantModel(): ResourceSpecificPermissionGrantModel<ResourceSpecificPermissionGrant> {
    return this.entity().asModel() as ResourceSpecificPermissionGrantModel<ResourceSpecificPermissionGrant>;
  }
  //#endregion
  //#region ODataApi Collection
  resourceSpecificPermissionGrantCollection(): ResourceSpecificPermissionGrantCollection<ResourceSpecificPermissionGrant, ResourceSpecificPermissionGrantModel<ResourceSpecificPermissionGrant>> {
    return this.entities().asCollection() as ResourceSpecificPermissionGrantCollection<ResourceSpecificPermissionGrant, ResourceSpecificPermissionGrantModel<ResourceSpecificPermissionGrant>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
