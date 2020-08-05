import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InviteParticipantsOperation } from './inviteparticipantsoperation.entity';
//#endregion

export const InviteParticipantsOperationConfig = {
  name: "InviteParticipantsOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  annotations: [],
  fields: {
    participants: {type: 'graph.invitationParticipantInfo', nullable: false, collection: true}
  }
} as EntityConfig<InviteParticipantsOperation>;