import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { EntityModel } from './entity.model';
import { IdentitySetCollection } from './identityset.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ChangeTrackedEntity extends Entity {
  //#region ODataApi Properties
  createdDateTime?: Date;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  //#endregion
}