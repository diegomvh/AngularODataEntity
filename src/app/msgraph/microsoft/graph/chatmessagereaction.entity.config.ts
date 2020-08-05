import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageReaction } from './chatmessagereaction.entity';
//#endregion

export const ChatMessageReactionConfig = {
  name: "chatMessageReaction",
  annotations: [],
  fields: {
    reactionType: {type: 'Edm.String', nullable: false},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    user: {type: 'graph.identitySet', nullable: false}
  }
} as EntityConfig<ChatMessageReaction>;