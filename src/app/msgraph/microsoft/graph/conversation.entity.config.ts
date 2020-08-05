import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Conversation } from './conversation.entity';
//#endregion

export const ConversationConfig = {
  name: "conversation",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    topic: {type: 'Edm.String', nullable: false},
    hasAttachments: {type: 'Edm.Boolean', nullable: false},
    lastDeliveredDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    uniqueSenders: {type: 'Edm.String', nullable: false, collection: true},
    preview: {type: 'Edm.String', nullable: false},
    threads: {type: 'graph.conversationThread', collection: true, navigation: true}
  }
} as EntityConfig<Conversation>;