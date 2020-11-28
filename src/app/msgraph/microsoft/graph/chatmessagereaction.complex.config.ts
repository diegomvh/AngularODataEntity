import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageReaction } from './chatmessagereaction.complex';
import { ChatMessageReactionModel } from './chatmessagereaction.model';
import { ChatMessageReactionCollection } from './chatmessagereaction.collection';
//#endregion

export const ChatMessageReactionConfig = {
  name: "chatMessageReaction",
  model: ChatMessageReactionModel,
  collection: ChatMessageReactionCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    reactionType: {type: 'Edm.String', nullable: false},
    user: {type: 'graph.identitySet', nullable: false}
  }
} as StructuredTypeConfig<ChatMessageReaction>;