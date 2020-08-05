import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageImportance } from './chatmessageimportance.enum';
//#endregion

export const ChatMessageImportanceConfig = {
  name: "ChatMessageImportance",
  members: ChatMessageImportance
} as EnumConfig<ChatMessageImportance>;