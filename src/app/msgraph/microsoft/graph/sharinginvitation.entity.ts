import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface SharingInvitation {
  //#region ODataApi Properties
  email?: string;
  invitedBy?: IdentitySet;
  redeemedBy?: string;
  signInRequired?: boolean;
  //#endregion
}