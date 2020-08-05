import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CommsOperation } from './commsoperation.entity';
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
//#endregion

export interface InviteParticipantsOperation extends CommsOperation {
  //#region ODataApi Properties
  participants: InvitationParticipantInfo[];
  //#endregion
}