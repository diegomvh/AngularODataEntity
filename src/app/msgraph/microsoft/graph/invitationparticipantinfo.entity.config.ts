import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
import { InvitationParticipantInfoModel } from './invitationparticipantinfo.model';
import { InvitationParticipantInfoCollection } from './invitationparticipantinfo.collection';
//#endregion

export const InvitationParticipantInfoConfig = {
  name: "invitationParticipantInfo",
  open: true,
  model: InvitationParticipantInfoModel,
  collection: InvitationParticipantInfoCollection,
  annotations: [],
  fields: {
    identity: {type: 'graph.identitySet', nullable: false},
    replacesCallId: {type: 'Edm.String'}
  }
} as EntityConfig<InvitationParticipantInfo>;