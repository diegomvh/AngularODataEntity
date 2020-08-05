import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageHostedContent } from './chatmessagehostedcontent.entity';
//#endregion

export const ChatMessageHostedContentConfig = {
  name: "chatMessageHostedContent",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ChatMessageHostedContent>;