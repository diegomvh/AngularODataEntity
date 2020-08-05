import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
//#endregion

export interface ChangeTrackedEntity extends Entity {
  //#region ODataApi Properties
  createdDateTime?: Date;
  lastModifiedDateTime?: Date;
  lastModifiedBy?: IdentitySet;
  //#endregion
}