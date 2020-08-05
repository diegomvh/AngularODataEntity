import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface MeetingParticipantInfo {
  //#region ODataApi Properties
  identity?: IdentitySet;
  upn?: string;
  //#endregion
}