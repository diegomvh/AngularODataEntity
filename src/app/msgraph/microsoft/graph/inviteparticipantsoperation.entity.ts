import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CommsOperation } from './commsoperation.entity';
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
import { InvitationParticipantInfoModel } from './invitationparticipantinfo.model';
import { CommsOperationModel } from './commsoperation.model';
import { InvitationParticipantInfoCollection } from './invitationparticipantinfo.collection';
import { CommsOperationCollection } from './commsoperation.collection';
//#endregion

export interface InviteParticipantsOperation extends CommsOperation {
  //#region ODataApi Properties
  participants: InvitationParticipantInfo[];
  //#endregion
}