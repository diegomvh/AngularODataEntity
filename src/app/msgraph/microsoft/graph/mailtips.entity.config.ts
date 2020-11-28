import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailTips } from './mailtips.entity';
import { MailTipsModel } from './mailtips.model';
import { MailTipsCollection } from './mailtips.collection';
//#endregion

export const MailTipsConfig = {
  name: "mailTips",
  model: MailTipsModel,
  collection: MailTipsCollection,
  annotations: [],
  fields: {
    automaticReplies: {type: 'graph.automaticRepliesMailTips'},
    customMailTip: {type: 'Edm.String'},
    deliveryRestricted: {type: 'Edm.Boolean'},
    emailAddress: {type: 'graph.emailAddress'},
    error: {type: 'graph.mailTipsError'},
    externalMemberCount: {type: 'Edm.Int32'},
    isModerated: {type: 'Edm.Boolean'},
    mailboxFull: {type: 'Edm.Boolean'},
    maxMessageSize: {type: 'Edm.Int32'},
    recipientScope: {type: 'graph.recipientScopeType'},
    recipientSuggestions: {type: 'graph.recipient', collection: true},
    totalMemberCount: {type: 'Edm.Int32'}
  }
} as EntityConfig<MailTips>;