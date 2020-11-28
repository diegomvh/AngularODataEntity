import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SharingInvitation } from './sharinginvitation.complex';
import { SharingInvitationModel } from './sharinginvitation.model';
import { SharingInvitationCollection } from './sharinginvitation.collection';
//#endregion

export const SharingInvitationConfig = {
  name: "sharingInvitation",
  model: SharingInvitationModel,
  collection: SharingInvitationCollection,
  annotations: [],
  fields: {
    email: {type: 'Edm.String'},
    invitedBy: {type: 'graph.identitySet'},
    redeemedBy: {type: 'Edm.String'},
    signInRequired: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<SharingInvitation>;