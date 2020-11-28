import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRule } from './win32lobapprule.complex';
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
//#endregion

export const Win32LobAppRuleConfig = {
  name: "win32LobAppRule",
  model: Win32LobAppRuleModel,
  collection: Win32LobAppRuleCollection,
  annotations: [],
  fields: {
    ruleType: {type: 'graph.win32LobAppRuleType', nullable: false}
  }
} as StructuredTypeConfig<Win32LobAppRule>;