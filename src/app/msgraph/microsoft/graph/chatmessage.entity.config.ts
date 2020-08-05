import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessage } from './chatmessage.entity';
//#endregion

export const ChatMessageConfig = {
  name: "ChatMessage",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    replyToId: {type: 'Edm.String'},
    from: {type: 'graph.identitySet'},
    etag: {type: 'Edm.String'},
    messageType: {type: 'graph.chatMessageType', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    deletedDateTime: {type: 'Edm.DateTimeOffset'},
    subject: {type: 'Edm.String'},
    body: {type: 'graph.itemBody', nullable: false},
    summary: {type: 'Edm.String'},
    attachments: {type: 'graph.chatMessageAttachment', collection: true},
    mentions: {type: 'graph.chatMessageMention', collection: true},
    importance: {type: 'graph.chatMessageImportance', nullable: false},
    policyViolation: {type: 'graph.chatMessagePolicyViolation'},
    reactions: {type: 'graph.chatMessageReaction', collection: true},
    locale: {type: 'Edm.String', nullable: false},
    webUrl: {type: 'Edm.String'},
    replies: {type: 'graph.chatMessage', collection: true, navigation: true},
    hostedContents: {type: 'graph.chatMessageHostedContent', collection: true, navigation: true}
  }
} as EntityConfig<ChatMessage>;