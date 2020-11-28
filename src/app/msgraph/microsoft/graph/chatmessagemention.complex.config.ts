import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageMention } from './chatmessagemention.complex';
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
} as StructuredTypeConfig<ChatMessageMention>;