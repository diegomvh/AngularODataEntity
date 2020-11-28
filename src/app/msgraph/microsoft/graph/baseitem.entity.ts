import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { IdentitySet } from './identityset.entity';
import { ItemReference } from './itemreference.entity';
import { User } from './user.entity';
import { IdentitySetModel } from './identityset.model';
import { ItemReferenceModel } from './itemreference.model';
import { EntityModel } from './entity.model';
import { UserModel } from './user.model';
import { IdentitySetCollection } from './identityset.collection';
import { ItemReferenceCollection } from './itemreference.collection';
import { EntityCollection } from './entity.collection';
import { UserCollection } from './user.collection';
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