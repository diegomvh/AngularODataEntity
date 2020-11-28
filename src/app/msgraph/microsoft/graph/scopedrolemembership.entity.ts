import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Identity } from './identity.complex';
import { IdentityModel } from './identity.model';
import { EntityModel } from './entity.model';
import { IdentityCollection } from './identity.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ScopedRoleMembership extends Entity {
  //#region ODataApi Properties
  administrativeUnitId: string;
  roleId: string;
  roleMemberInfo: Identity;
  //#endregion
}