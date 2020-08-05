import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConversationThread } from './conversationthread.entity';
//#endregion

export const ConversationThreadConfig = {
  name: "conversationThread",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    toRecipients: {type: 'graph.recipient', nullable: false, collection: true},
    topic: {type: 'Edm.String', nullable: false},
    hasAttachments: {type: 'Edm.Boolean', nullable: false},
    lastDeliveredDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    uniqueSenders: {type: 'Edm.String', nullable: false, collection: true},
    ccRecipients: {type: 'graph.recipient', nullable: false, collection: true},
    preview: {type: 'Edm.String', nullable: false},
    isLocked: {type: 'Edm.Boolean', nullable: false},
    posts: {type: 'graph.post', collection: true, navigation: true}
  }
} as EntityConfig<ConversationThread>;