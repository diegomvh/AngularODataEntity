import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppPowerShellScriptRule } from './win32lobapppowershellscriptrule.complex';
import { Win32LobAppPowerShellScriptRuleModel } from './win32lobapppowershellscriptrule.model';
import { Win32LobAppPowerShellScriptRuleCollection } from './win32lobapppowershellscriptrule.collection';
//#endregion

export const Win32LobAppPowerShellScriptRuleConfig = {
  name: "win32LobAppPowerShellScriptRule",
  base: "microsoft.graph.win32LobAppRule",
  model: Win32LobAppPowerShellScriptRuleModel,
  collection: Win32LobAppPowerShellScriptRuleCollection,
  annotations: [],
  fields: {
    comparisonValue: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    enforceSignatureCheck: {type: 'Edm.Boolean', nullable: false},
    operationType: {type: 'graph.win32LobAppPowerShellScriptRuleOperationType', nullable: false},
    operator: {type: 'graph.win32LobAppRuleOperator', nullable: false},
    runAs32Bit: {type: 'Edm.Boolean', nullable: false},
    runAsAccount: {type: 'graph.runAsAccountType'},
    scriptContent: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Win32LobAppPowerShellScriptRule>;