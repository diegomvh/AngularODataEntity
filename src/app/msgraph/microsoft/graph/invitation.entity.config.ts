import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Invitation } from './invitation.entity';
import { InvitationModel } from './invitation.model';
import { InvitationCollection } from './invitation.collection';
//#endregion

export const InvitationConfig = {
  name: "invitation",
  base: "microsoft.graph.entity",
  model: InvitationModel,
  collection: InvitationCollection,
  annotations: [],
  fields: {
    invitedUserDisplayName: {type: 'Edm.String'},
    invitedUserEmailAddress: {type: 'Edm.String', nullable: false},
    invitedUserMessageInfo: {type: 'graph.invitedUserMessageInfo'},
    invitedUserType: {type: 'Edm.String'},
    inviteRedeemUrl: {type: 'Edm.String'},
    inviteRedirectUrl: {type: 'Edm.String', nullable: false},
    sendInvitationMessage: {type: 'Edm.Boolean'},
    status: {type: 'Edm.String'},
    invitedUser: {type: 'graph.user', navigation: true}
  }
} as EntityConfig<Invitation>;