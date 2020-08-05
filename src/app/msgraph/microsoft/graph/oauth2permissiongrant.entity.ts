import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface OAuth2PermissionGrant extends Entity {
  //#region ODataApi Properties
  clientId: string;
  consentType?: string;
  principalId?: string;
  resourceId: string;
  scope?: string;
  //#endregion
}