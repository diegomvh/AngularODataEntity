import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppFileSystemRule } from './win32lobappfilesystemrule.complex';
import { Win32LobAppFileSystemRuleModel } from './win32lobappfilesystemrule.model';
import { Win32LobAppFileSystemRuleCollection } from './win32lobappfilesystemrule.collection';
//#endregion

export const Win32LobAppFileSystemRuleConfig = {
  name: "win32LobAppFileSystemRule",
  base: "microsoft.graph.win32LobAppRule",
  model: Win32LobAppFileSystemRuleModel,
  collection: Win32LobAppFileSystemRuleCollection,
  annotations: [],
  fields: {
    check32BitOn64System: {type: 'Edm.Boolean', nullable: false},
    comparisonValue: {type: 'Edm.String'},
    fileOrFolderName: {type: 'Edm.String'},
    operationType: {type: 'graph.win32LobAppFileSystemOperationType', nullable: false},
    operator: {type: 'graph.win32LobAppRuleOperator', nullable: false},
    path: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Win32LobAppFileSystemRule>;