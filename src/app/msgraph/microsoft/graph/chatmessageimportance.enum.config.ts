import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessageImportance } from './chatmessageimportance.enum';
//#endregion

export const ChatMessageImportanceConfig = {
  name: "chatMessageImportance",
  members: ChatMessageImportance
} as EnumTypeConfig<ChatMessageImportance>;