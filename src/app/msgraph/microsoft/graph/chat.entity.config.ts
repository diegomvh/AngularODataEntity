import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Chat } from './chat.entity';
import { ChatModel } from './chat.model';
import { ChatCollection } from './chat.collection';
//#endregion

export const ChatConfig = {
  name: "chat",
  base: "microsoft.graph.entity",
  model: ChatModel,
  collection: ChatCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<Chat>;