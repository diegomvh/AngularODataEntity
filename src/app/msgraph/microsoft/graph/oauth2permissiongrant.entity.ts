import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
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