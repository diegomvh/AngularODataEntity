import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Message } from './message.entity';
//#endregion

export const MessageConfig = {
  name: "Message",
  base: "microsoft.graph.outlookItem",
  open: true,
  annotations: [],
  fields: {
    receivedDateTime: {type: 'Edm.DateTimeOffset'},
    sentDateTime: {type: 'Edm.DateTimeOffset'},
    hasAttachments: {type: 'Edm.Boolean'},
    internetMessageId: {type: 'Edm.String'},
    internetMessageHeaders: {type: 'graph.internetMessageHeader', collection: true},
    subject: {type: 'Edm.String'},
    body: {type: 'graph.itemBody'},
    bodyPreview: {type: 'Edm.String'},
    importance: {type: 'graph.importance'},
    parentFolderId: {type: 'Edm.String'},
    sender: {type: 'graph.recipient'},
    from: {type: 'graph.recipient'},
    toRecipients: {type: 'graph.recipient', collection: true},
    ccRecipients: {type: 'graph.recipient', collection: true},
    bccRecipients: {type: 'graph.recipient', collection: true},
    replyTo: {type: 'graph.recipient', collection: true},
    conversationId: {type: 'Edm.String'},
    conversationIndex: {type: 'Edm.Binary'},
    uniqueBody: {type: 'graph.itemBody'},
    isDeliveryReceiptRequested: {type: 'Edm.Boolean'},
    isReadReceiptRequested: {type: 'Edm.Boolean'},
    isRead: {type: 'Edm.Boolean'},
    isDraft: {type: 'Edm.Boolean'},
    webLink: {type: 'Edm.String'},
    inferenceClassification: {type: 'graph.inferenceClassificationType'},
    flag: {type: 'graph.followupFlag'},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    attachments: {type: 'graph.attachment', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true}
  }
} as EntityConfig<Message>;