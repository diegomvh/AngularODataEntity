import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
//#endregion

export const InvitationParticipantInfoConfig = {
  name: "InvitationParticipantInfo",
  open: true,
  annotations: [],
  fields: {
    identity: {type: 'graph.identitySet', nullable: false},
    replacesCallId: {type: 'Edm.String'}
  }
} as EntityConfig<InvitationParticipantInfo>;