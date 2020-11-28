import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ApiApplication } from './apiapplication.entity';
import { PermissionScope } from './permissionscope.entity';
import { PreAuthorizedApplication } from './preauthorizedapplication.entity';
import { PermissionScopeModel } from './permissionscope.model';
import { PreAuthorizedApplicationModel } from './preauthorizedapplication.model';
import { ApiApplicationCollection } from './apiapplication.collection';
import { PermissionScopeCollection } from './permissionscope.collection';
import { PreAuthorizedApplicationCollection } from './preauthorizedapplication.collection';
//#endregion

export class ApiApplicationModel<E extends ApiApplication> extends ODataModel<E> {
  //#region ODataApi Properties
  acceptMappedClaims?: boolean;
  knownClientApplications?: string[];
  oauth2PermissionScopes: PermissionScopeCollection<PermissionScope, PermissionScopeModel<PermissionScope>>;
  preAuthorizedApplications?: PreAuthorizedApplicationCollection<PreAuthorizedApplication, PreAuthorizedApplicationModel<PreAuthorizedApplication>>;
  requestedAccessTokenVersion?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}