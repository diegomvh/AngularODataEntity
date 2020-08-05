import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolationVerdictDetailsTypes } from './chatmessagepolicyviolationverdictdetailstypes.enum';
//#endregion

export const ChatMessagePolicyViolationVerdictDetailsTypesConfig = {
  name: "ChatMessagePolicyViolationVerdictDetailsTypes",
  flags: true,
  members: ChatMessagePolicyViolationVerdictDetailsTypes
} as EnumConfig<ChatMessagePolicyViolationVerdictDetailsTypes>;