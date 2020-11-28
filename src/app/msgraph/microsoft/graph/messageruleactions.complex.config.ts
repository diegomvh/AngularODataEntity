import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MessageRuleActions } from './messageruleactions.complex';
import { MessageRuleActionsModel } from './messageruleactions.model';
import { MessageRuleActionsCollection } from './messageruleactions.collection';
//#endregion

export const MessageRuleActionsConfig = {
  name: "messageRuleActions",
  model: MessageRuleActionsModel,
  collection: MessageRuleActionsCollection,
  annotations: [],
  fields: {
    assignCategories: {type: 'Edm.String', collection: true},
    copyToFolder: {type: 'Edm.String'},
    delete: {type: 'Edm.Boolean'},
    forwardAsAttachmentTo: {type: 'graph.recipient', collection: true},
    forwardTo: {type: 'graph.recipient', collection: true},
    markAsRead: {type: 'Edm.Boolean'},
    markImportance: {type: 'graph.importance'},
    moveToFolder: {type: 'Edm.String'},
    permanentDelete: {type: 'Edm.Boolean'},
    redirectTo: {type: 'graph.recipient', collection: true},
    stopProcessingRules: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<MessageRuleActions>;