import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageHostedContent } from './chatmessagehostedcontent.entity';
import { ChatMessageHostedContentModel } from './chatmessagehostedcontent.model';
import { ChatMessageHostedContentCollection } from './chatmessagehostedcontent.collection';
//#endregion

export const ChatMessageHostedContentConfig = {
  name: "chatMessageHostedContent",
  base: "microsoft.graph.entity",
  model: ChatMessageHostedContentModel,
  collection: ChatMessageHostedContentCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ChatMessageHostedContent>;