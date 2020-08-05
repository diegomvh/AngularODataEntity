import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PreAuthorizedApplication } from './preauthorizedapplication.entity';
import { PermissionScope } from './permissionscope.entity';
//#endregion

export interface ApiApplication {
  //#region ODataApi Properties
  acceptMappedClaims?: boolean;
  knownClientApplications?: string[];
  preAuthorizedApplications?: PreAuthorizedApplication[];
  requestedAccessTokenVersion?: number;
  oauth2PermissionScopes: PermissionScope[];
  //#endregion
}