import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PermissionScope } from './permissionscope.complex';
import { PreAuthorizedApplication } from './preauthorizedapplication.complex';
import { PermissionScopeModel } from './permissionscope.model';
import { PreAuthorizedApplicationModel } from './preauthorizedapplication.model';
import { PermissionScopeCollection } from './permissionscope.collection';
import { PreAuthorizedApplicationCollection } from './preauthorizedapplication.collection';
//#endregion

export interface ApiApplication {
  //#region ODataApi Properties
  acceptMappedClaims?: boolean;
  knownClientApplications?: string[];
  oauth2PermissionScopes: PermissionScope[];
  preAuthorizedApplications?: PreAuthorizedApplication[];
  requestedAccessTokenVersion?: number;
  //#endregion
}