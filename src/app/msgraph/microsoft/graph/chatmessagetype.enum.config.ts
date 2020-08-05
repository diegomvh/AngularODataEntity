import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageType } from './chatmessagetype.enum';
//#endregion

export const ChatMessageTypeConfig = {
  name: "ChatMessageType",
  members: ChatMessageType
} as EnumConfig<ChatMessageType>;