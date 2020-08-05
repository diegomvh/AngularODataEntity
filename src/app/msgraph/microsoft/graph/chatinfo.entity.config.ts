import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatInfo } from './chatinfo.entity';
//#endregion

export const ChatInfoConfig = {
  name: "chatInfo",
  annotations: [],
  fields: {
    threadId: {type: 'Edm.String'},
    messageId: {type: 'Edm.String'},
    replyChainMessageId: {type: 'Edm.String'}
  }
} as EntityConfig<ChatInfo>;