import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRule } from './win32lobapprule.complex';
import { Win32LobAppRegistryRuleOperationType } from './win32lobappregistryruleoperationtype.enum';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
//#endregion

export interface Win32LobAppRegistryRule extends Win32LobAppRule {
  //#region ODataApi Properties
  check32BitOn64System: boolean;
  comparisonValue?: string;
  keyPath?: string;
  operationType: Win32LobAppRegistryRuleOperationType;
  operator: Win32LobAppRuleOperator;
  valueName?: string;
  //#endregion
}