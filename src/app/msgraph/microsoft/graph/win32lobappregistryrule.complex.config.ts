import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRegistryRule } from './win32lobappregistryrule.complex';
import { Win32LobAppRegistryRuleModel } from './win32lobappregistryrule.model';
import { Win32LobAppRegistryRuleCollection } from './win32lobappregistryrule.collection';
//#endregion

export const Win32LobAppRegistryRuleConfig = {
  name: "win32LobAppRegistryRule",
  base: "microsoft.graph.win32LobAppRule",
  model: Win32LobAppRegistryRuleModel,
  collection: Win32LobAppRegistryRuleCollection,
  annotations: [],
  fields: {
    check32BitOn64System: {type: 'Edm.Boolean', nullable: false},
    comparisonValue: {type: 'Edm.String'},
    keyPath: {type: 'Edm.String'},
    operationType: {type: 'graph.win32LobAppRegistryRuleOperationType', nullable: false},
    operator: {type: 'graph.win32LobAppRuleOperator', nullable: false},
    valueName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Win32LobAppRegistryRule>;