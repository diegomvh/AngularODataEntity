import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MessageRulePredicates } from './messagerulepredicates.entity';
import { MessageRulePredicatesModel } from './messagerulepredicates.model';
import { MessageRulePredicatesCollection } from './messagerulepredicates.collection';
//#endregion

export const MessageRulePredicatesConfig = {
  name: "messageRulePredicates",
  model: MessageRulePredicatesModel,
  collection: MessageRulePredicatesCollection,
  annotations: [],
  fields: {
    bodyContains: {type: 'Edm.String', collection: true},
    bodyOrSubjectContains: {type: 'Edm.String', collection: true},
    categories: {type: 'Edm.String', collection: true},
    fromAddresses: {type: 'graph.recipient', collection: true},
    hasAttachments: {type: 'Edm.Boolean'},
    headerContains: {type: 'Edm.String', collection: true},
    importance: {type: 'graph.importance'},
    isApprovalRequest: {type: 'Edm.Boolean'},
    isAutomaticForward: {type: 'Edm.Boolean'},
    isAutomaticReply: {type: 'Edm.Boolean'},
    isEncrypted: {type: 'Edm.Boolean'},
    isMeetingRequest: {type: 'Edm.Boolean'},
    isMeetingResponse: {type: 'Edm.Boolean'},
    isNonDeliveryReport: {type: 'Edm.Boolean'},
    isPermissionControlled: {type: 'Edm.Boolean'},
    isReadReceipt: {type: 'Edm.Boolean'},
    isSigned: {type: 'Edm.Boolean'},
    isVoicemail: {type: 'Edm.Boolean'},
    messageActionFlag: {type: 'graph.messageActionFlag'},
    notSentToMe: {type: 'Edm.Boolean'},
    recipientContains: {type: 'Edm.String', collection: true},
    senderContains: {type: 'Edm.String', collection: true},
    sensitivity: {type: 'graph.sensitivity'},
    sentCcMe: {type: 'Edm.Boolean'},
    sentOnlyToMe: {type: 'Edm.Boolean'},
    sentToAddresses: {type: 'graph.recipient', collection: true},
    sentToMe: {type: 'Edm.Boolean'},
    sentToOrCcMe: {type: 'Edm.Boolean'},
    subjectContains: {type: 'Edm.String', collection: true},
    withinSizeRange: {type: 'graph.sizeRange'}
  }
} as EntityConfig<MessageRulePredicates>;