﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolationDlpActionTypes } from './chatmessagepolicyviolationdlpactiontypes.enum';
//#endregion

export const ChatMessagePolicyViolationDlpActionTypesConfig = {
  name: "ChatMessagePolicyViolationDlpActionTypes",
  flags: true,
  members: ChatMessagePolicyViolationDlpActionTypes
} as EnumConfig<ChatMessagePolicyViolationDlpActionTypes>;