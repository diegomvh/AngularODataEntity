import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolationPolicyTip } from './chatmessagepolicyviolationpolicytip.entity';
//#endregion

export const ChatMessagePolicyViolationPolicyTipConfig = {
  name: "chatMessagePolicyViolationPolicyTip",
  annotations: [],
  fields: {
    generalText: {type: 'Edm.String'},
    complianceUrl: {type: 'Edm.String'},
    matchedConditionDescriptions: {type: 'Edm.String', collection: true}
  }
} as EntityConfig<ChatMessagePolicyViolationPolicyTip>;