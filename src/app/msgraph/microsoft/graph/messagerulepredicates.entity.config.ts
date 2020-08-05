import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MessageRulePredicates } from './messagerulepredicates.entity';
//#endregion

export const MessageRulePredicatesConfig = {
  name: "messageRulePredicates",
  annotations: [],
  fields: {
    categories: {type: 'Edm.String', collection: true},
    subjectContains: {type: 'Edm.String', collection: true},
    bodyContains: {type: 'Edm.String', collection: true},
    bodyOrSubjectContains: {type: 'Edm.String', collection: true},
    senderContains: {type: 'Edm.String', collection: true},
    recipientContains: {type: 'Edm.String', collection: true},
    headerContains: {type: 'Edm.String', collection: true},
    messageActionFlag: {type: 'graph.messageActionFlag'},
    importance: {type: 'graph.importance'},
    sensitivity: {type: 'graph.sensitivity'},
    fromAddresses: {type: 'graph.recipient', collection: true},
    sentToAddresses: {type: 'graph.recipient', collection: true},
    sentToMe: {type: 'Edm.Boolean'},
    sentOnlyToMe: {type: 'Edm.Boolean'},
    sentCcMe: {type: 'Edm.Boolean'},
    sentToOrCcMe: {type: 'Edm.Boolean'},
    notSentToMe: {type: 'Edm.Boolean'},
    hasAttachments: {type: 'Edm.Boolean'},
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
    withinSizeRange: {type: 'graph.sizeRange'}
  }
} as EntityConfig<MessageRulePredicates>;