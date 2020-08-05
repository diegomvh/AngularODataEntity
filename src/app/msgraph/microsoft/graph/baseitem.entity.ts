import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { ItemReference } from './itemreference.entity';
import { User } from './user.entity';
//#endregion

export interface BaseItem extends Entity {
  //#region ODataApi Properties
  createdBy?: IdentitySet;
  createdDateTime: Date;
  description?: string;
  eTag?: string;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime: Date;
  name?: string;
  parentReference?: ItemReference;
  webUrl?: string;
  createdByUser?: User;
  lastModifiedByUser?: User;
  //#endregion
}