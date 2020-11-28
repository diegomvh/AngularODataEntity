import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRule } from './win32lobapprule.complex';
import { RunAsAccountType } from './runasaccounttype.enum';
import { Win32LobAppPowerShellScriptRuleOperationType } from './win32lobapppowershellscriptruleoperationtype.enum';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
//#endregion

export interface Win32LobAppPowerShellScriptRule extends Win32LobAppRule {
  //#region ODataApi Properties
  comparisonValue?: string;
  displayName?: string;
  enforceSignatureCheck: boolean;
  operationType: Win32LobAppPowerShellScriptRuleOperationType;
  operator: Win32LobAppRuleOperator;
  runAs32Bit: boolean;
  runAsAccount?: RunAsAccountType;
  scriptContent?: string;
  //#endregion
}