import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InvitedUserMessageInfo } from './invitedusermessageinfo.entity';
//#endregion

export const InvitedUserMessageInfoConfig = {
  name: "InvitedUserMessageInfo",
  annotations: [],
  fields: {
    ccRecipients: {type: 'graph.recipient', collection: true},
    messageLanguage: {type: 'Edm.String'},
    customizedMessageBody: {type: 'Edm.String'}
  }
} as EntityConfig<InvitedUserMessageInfo>;