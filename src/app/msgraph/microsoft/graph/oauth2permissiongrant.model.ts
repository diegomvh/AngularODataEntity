import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { OAuth2PermissionGrantCollection } from './oauth2permissiongrant.collection';
//#endregion

export class OAuth2PermissionGrantModel<E extends OAuth2PermissionGrant> extends EntityModel<E> {
  //#region ODataApi Properties
  clientId: string;
  consentType?: string;
  principalId?: string;
  resourceId: string;
  scope?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}