import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface SharingInvitation {
  //#region ODataApi Properties
  email?: string;
  invitedBy?: IdentitySet;
  redeemedBy?: string;
  signInRequired?: boolean;
  //#endregion
}