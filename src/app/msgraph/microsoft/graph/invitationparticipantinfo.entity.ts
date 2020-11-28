import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface InvitationParticipantInfo {
  //#region ODataApi Properties
  identity: IdentitySet;
  replacesCallId?: string;
  //#endregion
}