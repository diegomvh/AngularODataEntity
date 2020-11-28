import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessage } from './chatmessage.entity';
import { ChatMessageModel } from './chatmessage.model';
import { ChatMessageCollection } from './chatmessage.collection';
//#endregion

export const ChatMessageConfig = {
  name: "chatMessage",
  base: "microsoft.graph.entity",
  model: ChatMessageModel,
  collection: ChatMessageCollection,
  annotations: [],
  fields: {
    attachments: {type: 'graph.chatMessageAttachment', collection: true},
    body: {type: 'graph.itemBody', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    deletedDateTime: {type: 'Edm.DateTimeOffset'},
    etag: {type: 'Edm.String'},
    from: {type: 'graph.identitySet'},
    importance: {type: 'graph.chatMessageImportance', nullable: false},
    lastEditedDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    locale: {type: 'Edm.String', nullable: false},
    mentions: {type: 'graph.chatMessageMention', collection: true},
    messageType: {type: 'graph.chatMessageType', nullable: false},
    policyViolation: {type: 'graph.chatMessagePolicyViolation'},
    reactions: {type: 'graph.chatMessageReaction', collection: true},
    replyToId: {type: 'Edm.String'},
    subject: {type: 'Edm.String'},
    summary: {type: 'Edm.String'},
    webUrl: {type: 'Edm.String'},
    hostedContents: {type: 'graph.chatMessageHostedContent', collection: true, navigation: true},
    replies: {type: 'graph.chatMessage', collection: true, navigation: true}
  }
} as StructuredTypeConfig<ChatMessage>;