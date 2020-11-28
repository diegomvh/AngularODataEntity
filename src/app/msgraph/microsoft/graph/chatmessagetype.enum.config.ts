import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageType } from './chatmessagetype.enum';
//#endregion

export const ChatMessageTypeConfig = {
  name: "chatMessageType",
  members: ChatMessageType
} as EnumTypeConfig<ChatMessageType>;