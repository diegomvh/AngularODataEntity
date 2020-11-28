import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface Shared {
  //#region ODataApi Properties
  owner?: IdentitySet;
  scope?: string;
  sharedBy?: IdentitySet;
  sharedDateTime?: Date;
  //#endregion
}