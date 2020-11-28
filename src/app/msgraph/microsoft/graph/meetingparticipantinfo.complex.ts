import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnlineMeetingRole } from './onlinemeetingrole.enum';
import { IdentitySet } from './identityset.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface MeetingParticipantInfo {
  //#region ODataApi Properties
  identity?: IdentitySet;
  role?: OnlineMeetingRole;
  upn?: string;
  //#endregion
}