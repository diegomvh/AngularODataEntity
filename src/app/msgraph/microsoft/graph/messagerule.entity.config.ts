import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MessageRule } from './messagerule.entity';
//#endregion

export const MessageRuleConfig = {
  name: "messageRule",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    sequence: {type: 'Edm.Int32'},
    conditions: {type: 'graph.messageRulePredicates'},
    actions: {type: 'graph.messageRuleActions'},
    exceptions: {type: 'graph.messageRulePredicates'},
    isEnabled: {type: 'Edm.Boolean'},
    hasError: {type: 'Edm.Boolean'},
    isReadOnly: {type: 'Edm.Boolean'}
  }
} as EntityConfig<MessageRule>;