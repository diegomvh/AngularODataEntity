import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Invitation } from './invitation.entity';
//#endregion

export const InvitationConfig = {
  name: "invitation",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    invitedUserDisplayName: {type: 'Edm.String'},
    invitedUserType: {type: 'Edm.String'},
    invitedUserEmailAddress: {type: 'Edm.String', nullable: false},
    invitedUserMessageInfo: {type: 'graph.invitedUserMessageInfo'},
    sendInvitationMessage: {type: 'Edm.Boolean'},
    inviteRedirectUrl: {type: 'Edm.String', nullable: false},
    inviteRedeemUrl: {type: 'Edm.String'},
    status: {type: 'Edm.String'},
    invitedUser: {type: 'graph.user', navigation: true}
  }
} as EntityConfig<Invitation>;