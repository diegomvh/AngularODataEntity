import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolationUserActionTypes } from './chatmessagepolicyviolationuseractiontypes.enum';
//#endregion

export const ChatMessagePolicyViolationUserActionTypesConfig = {
  name: "ChatMessagePolicyViolationUserActionTypes",
  flags: true,
  members: ChatMessagePolicyViolationUserActionTypes
} as EnumConfig<ChatMessagePolicyViolationUserActionTypes>;