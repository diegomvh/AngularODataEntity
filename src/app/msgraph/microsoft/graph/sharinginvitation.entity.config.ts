import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharingInvitation } from './sharinginvitation.entity';
//#endregion

export const SharingInvitationConfig = {
  name: "sharingInvitation",
  annotations: [],
  fields: {
    email: {type: 'Edm.String'},
    invitedBy: {type: 'graph.identitySet'},
    redeemedBy: {type: 'Edm.String'},
    signInRequired: {type: 'Edm.Boolean'}
  }
} as EntityConfig<SharingInvitation>;