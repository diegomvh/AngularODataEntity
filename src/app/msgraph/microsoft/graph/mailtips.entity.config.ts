import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailTips } from './mailtips.entity';
//#endregion

export const MailTipsConfig = {
  name: "mailTips",
  annotations: [],
  fields: {
    emailAddress: {type: 'graph.emailAddress'},
    automaticReplies: {type: 'graph.automaticRepliesMailTips'},
    mailboxFull: {type: 'Edm.Boolean'},
    customMailTip: {type: 'Edm.String'},
    externalMemberCount: {type: 'Edm.Int32'},
    totalMemberCount: {type: 'Edm.Int32'},
    deliveryRestricted: {type: 'Edm.Boolean'},
    isModerated: {type: 'Edm.Boolean'},
    recipientScope: {type: 'graph.recipientScopeType'},
    recipientSuggestions: {type: 'graph.recipient', collection: true},
    maxMessageSize: {type: 'Edm.Int32'},
    error: {type: 'graph.mailTipsError'}
  }
} as EntityConfig<MailTips>;