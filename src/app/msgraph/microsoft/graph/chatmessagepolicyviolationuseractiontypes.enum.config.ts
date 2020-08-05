import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolationUserActionTypes } from './chatmessagepolicyviolationuseractiontypes.enum';
//#endregion

export const ChatMessagePolicyViolationUserActionTypesConfig = {
  name: "chatMessagePolicyViolationUserActionTypes",
  flags: true,
  members: ChatMessagePolicyViolationUserActionTypes
} as EnumConfig<ChatMessagePolicyViolationUserActionTypes>;