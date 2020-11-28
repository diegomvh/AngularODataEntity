import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConversationThread } from './conversationthread.entity';
import { ConversationThreadModel } from './conversationthread.model';
import { ConversationThreadCollection } from './conversationthread.collection';
//#endregion

export const ConversationThreadConfig = {
  name: "conversationThread",
  base: "microsoft.graph.entity",
  model: ConversationThreadModel,
  collection: ConversationThreadCollection,
  annotations: [],
  fields: {
    ccRecipients: {type: 'graph.recipient', nullable: false, collection: true},
    hasAttachments: {type: 'Edm.Boolean', nullable: false},
    isLocked: {type: 'Edm.Boolean', nullable: false},
    lastDeliveredDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    preview: {type: 'Edm.String', nullable: false},
    topic: {type: 'Edm.String', nullable: false},
    toRecipients: {type: 'graph.recipient', nullable: false, collection: true},
    uniqueSenders: {type: 'Edm.String', nullable: false, collection: true},
    posts: {type: 'graph.post', collection: true, navigation: true}
  }
} as EntityConfig<ConversationThread>;