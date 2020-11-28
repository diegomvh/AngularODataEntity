import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MessageRule } from './messagerule.entity';
import { MessageRuleModel } from './messagerule.model';
import { MessageRuleCollection } from './messagerule.collection';
//#endregion

export const MessageRuleConfig = {
  name: "messageRule",
  base: "microsoft.graph.entity",
  model: MessageRuleModel,
  collection: MessageRuleCollection,
  annotations: [],
  fields: {
    actions: {type: 'graph.messageRuleActions'},
    conditions: {type: 'graph.messageRulePredicates'},
    displayName: {type: 'Edm.String'},
    exceptions: {type: 'graph.messageRulePredicates'},
    hasError: {type: 'Edm.Boolean'},
    isEnabled: {type: 'Edm.Boolean'},
    isReadOnly: {type: 'Edm.Boolean'},
    sequence: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<MessageRule>;