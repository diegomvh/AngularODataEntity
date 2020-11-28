import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageMention } from './chatmessagemention.entity';
import { ChatMessageMentionModel } from './chatmessagemention.model';
import { ChatMessageMentionCollection } from './chatmessagemention.collection';
//#endregion

export const ChatMessageMentionConfig = {
  name: "chatMessageMention",
  model: ChatMessageMentionModel,
  collection: ChatMessageMentionCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.Int32'},
    mentioned: {type: 'graph.identitySet'},
    mentionText: {type: 'Edm.String'}
  }
} as EntityConfig<ChatMessageMention>;