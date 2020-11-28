import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolation } from './chatmessagepolicyviolation.entity';
import { ChatMessagePolicyViolationModel } from './chatmessagepolicyviolation.model';
import { ChatMessagePolicyViolationCollection } from './chatmessagepolicyviolation.collection';
//#endregion

export const ChatMessagePolicyViolationConfig = {
  name: "chatMessagePolicyViolation",
  model: ChatMessagePolicyViolationModel,
  collection: ChatMessagePolicyViolationCollection,
  annotations: [],
  fields: {
    dlpAction: {type: 'graph.chatMessagePolicyViolationDlpActionTypes'},
    justificationText: {type: 'Edm.String'},
    policyTip: {type: 'graph.chatMessagePolicyViolationPolicyTip'},
    userAction: {type: 'graph.chatMessagePolicyViolationUserActionTypes'},
    verdictDetails: {type: 'graph.chatMessagePolicyViolationVerdictDetailsTypes'}
  }
} as EntityConfig<ChatMessagePolicyViolation>;