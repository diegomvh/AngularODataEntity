import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MessageRuleActions } from './messageruleactions.entity';
//#endregion

export const MessageRuleActionsConfig = {
  name: "MessageRuleActions",
  annotations: [],
  fields: {
    moveToFolder: {type: 'Edm.String'},
    copyToFolder: {type: 'Edm.String'},
    delete: {type: 'Edm.Boolean'},
    permanentDelete: {type: 'Edm.Boolean'},
    markAsRead: {type: 'Edm.Boolean'},
    markImportance: {type: 'graph.importance'},
    forwardTo: {type: 'graph.recipient', collection: true},
    forwardAsAttachmentTo: {type: 'graph.recipient', collection: true},
    redirectTo: {type: 'graph.recipient', collection: true},
    assignCategories: {type: 'Edm.String', collection: true},
    stopProcessingRules: {type: 'Edm.Boolean'}
  }
} as EntityConfig<MessageRuleActions>;