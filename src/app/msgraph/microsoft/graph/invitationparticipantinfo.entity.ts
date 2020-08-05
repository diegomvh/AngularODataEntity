import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface InvitationParticipantInfo {
  //#region ODataApi Properties
  identity: IdentitySet;
  replacesCallId?: string;
  //#endregion
}