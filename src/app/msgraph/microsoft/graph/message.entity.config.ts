import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Message } from './message.entity';
import { MessageModel } from './message.model';
import { MessageCollection } from './message.collection';
//#endregion

export const MessageConfig = {
  name: "message",
  base: "microsoft.graph.outlookItem",
  open: true,
  model: MessageModel,
  collection: MessageCollection,
  annotations: [],
  fields: {
    bccRecipients: {type: 'graph.recipient', collection: true},
    body: {type: 'graph.itemBody'},
    bodyPreview: {type: 'Edm.String'},
    ccRecipients: {type: 'graph.recipient', collection: true},
    conversationId: {type: 'Edm.String'},
    conversationIndex: {type: 'Edm.Binary'},
    flag: {type: 'graph.followupFlag'},
    from: {type: 'graph.recipient'},
    hasAttachments: {type: 'Edm.Boolean'},
    importance: {type: 'graph.importance'},
    inferenceClassification: {type: 'graph.inferenceClassificationType'},
    internetMessageHeaders: {type: 'graph.internetMessageHeader', collection: true},
    internetMessageId: {type: 'Edm.String'},
    isDeliveryReceiptRequested: {type: 'Edm.Boolean'},
    isDraft: {type: 'Edm.Boolean'},
    isRead: {type: 'Edm.Boolean'},
    isReadReceiptRequested: {type: 'Edm.Boolean'},
    parentFolderId: {type: 'Edm.String'},
    receivedDateTime: {type: 'Edm.DateTimeOffset'},
    replyTo: {type: 'graph.recipient', collection: true},
    sender: {type: 'graph.recipient'},
    sentDateTime: {type: 'Edm.DateTimeOffset'},
    subject: {type: 'Edm.String'},
    toRecipients: {type: 'graph.recipient', collection: true},
    uniqueBody: {type: 'graph.itemBody'},
    webLink: {type: 'Edm.String'},
    attachments: {type: 'graph.attachment', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true},
    multiValueExtendedProperties: {type: 'graph.multiValueLegacyExtendedProperty', collection: true, navigation: true},
    singleValueExtendedProperties: {type: 'graph.singleValueLegacyExtendedProperty', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Message>;