import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolationVerdictDetailsTypes } from './chatmessagepolicyviolationverdictdetailstypes.enum';
//#endregion

export const ChatMessagePolicyViolationVerdictDetailsTypesConfig = {
  name: "chatMessagePolicyViolationVerdictDetailsTypes",
  flags: true,
  members: ChatMessagePolicyViolationVerdictDetailsTypes
} as EnumTypeConfig<ChatMessagePolicyViolationVerdictDetailsTypes>;