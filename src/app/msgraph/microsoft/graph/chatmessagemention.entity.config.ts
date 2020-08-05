import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageMention } from './chatmessagemention.entity';
//#endregion

export const ChatMessageMentionConfig = {
  name: "chatMessageMention",
  annotations: [],
  fields: {
    id: {type: 'Edm.Int32'},
    mentionText: {type: 'Edm.String'},
    mentioned: {type: 'graph.identitySet'}
  }
} as EntityConfig<ChatMessageMention>;