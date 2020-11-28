import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRule } from './win32lobapprule.complex';
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
//#endregion

export interface Win32LobAppProductCodeRule extends Win32LobAppRule {
  //#region ODataApi Properties
  productCode?: string;
  productVersion?: string;
  productVersionOperator: Win32LobAppRuleOperator;
  //#endregion
}