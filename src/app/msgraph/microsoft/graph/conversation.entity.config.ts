import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Conversation } from './conversation.entity';
import { ConversationModel } from './conversation.model';
import { ConversationCollection } from './conversation.collection';
//#endregion

export const ConversationConfig = {
  name: "conversation",
  base: "microsoft.graph.entity",
  model: ConversationModel,
  collection: ConversationCollection,
  annotations: [],
  fields: {
    hasAttachments: {type: 'Edm.Boolean', nullable: false},
    lastDeliveredDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    preview: {type: 'Edm.String', nullable: false},
    topic: {type: 'Edm.String', nullable: false},
    uniqueSenders: {type: 'Edm.String', nullable: false, collection: true},
    threads: {type: 'graph.conversationThread', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Conversation>;