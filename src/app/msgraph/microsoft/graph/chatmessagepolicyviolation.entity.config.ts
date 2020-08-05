import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.entity';
//#endregion

export const ChatMessagePolicyViolationConfig = {
  name: "ChatMessagePolicyViolation",
  annotations: [],
  fields: {
    dlpAction: {type: 'graph.chatMessagePolicyViolationDlpActionTypes'},
    justificationText: {type: 'Edm.String'},
    policyTip: {type: 'graph.chatMessagePolicyViolationPolicyTip'},
    userAction: {type: 'graph.chatMessagePolicyViolationUserActionTypes'},
    verdictDetails: {type: 'graph.chatMessagePolicyViolationVerdictDetailsTypes'}
  }
} as EntityConfig<ChatMessagePolicyViolation>;