import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatInfo } from './chatinfo.entity';
import { ChatInfoModel } from './chatinfo.model';
import { ChatInfoCollection } from './chatinfo.collection';
//#endregion

export const ChatInfoConfig = {
  name: "chatInfo",
  model: ChatInfoModel,
  collection: ChatInfoCollection,
  annotations: [],
  fields: {
    messageId: {type: 'Edm.String'},
    replyChainMessageId: {type: 'Edm.String'},
    threadId: {type: 'Edm.String'}
  }
} as EntityConfig<ChatInfo>;