import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface Shared {
  //#region ODataApi Properties
  owner?: IdentitySet;
  scope?: string;
  sharedBy?: IdentitySet;
  sharedDateTime?: Date;
  //#endregion
}