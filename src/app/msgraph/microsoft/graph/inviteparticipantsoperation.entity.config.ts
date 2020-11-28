import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { InviteParticipantsOperation } from './inviteparticipantsoperation.entity';
import { InviteParticipantsOperationModel } from './inviteparticipantsoperation.model';
import { InviteParticipantsOperationCollection } from './inviteparticipantsoperation.collection';
//#endregion

export const InviteParticipantsOperationConfig = {
  name: "inviteParticipantsOperation",
  base: "microsoft.graph.commsOperation",
  open: true,
  model: InviteParticipantsOperationModel,
  collection: InviteParticipantsOperationCollection,
  annotations: [],
  fields: {
    participants: {type: 'graph.invitationParticipantInfo', nullable: false, collection: true}
  }
} as StructuredTypeConfig<InviteParticipantsOperation>;