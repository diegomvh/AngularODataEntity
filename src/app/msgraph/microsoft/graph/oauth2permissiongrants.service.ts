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
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
//#endregion

@Injectable()
export class Oauth2PermissionGrantsService extends ODataEntityService<OAuth2PermissionGrant> {
  constructor(protected client: ODataClient) {
    super(client, 'oauth2PermissionGrants', 'microsoft.graph.oAuth2PermissionGrant');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(): ODataFunctionResource<null, OAuth2PermissionGrant> {
    const resource = this.entities().function<null, OAuth2PermissionGrant>('microsoft.graph.delta');
    return resource;
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
