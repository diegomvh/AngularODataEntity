import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRuleType } from './win32lobappruletype.enum';
//#endregion

export interface Win32LobAppRule {
  //#region ODataApi Properties
  ruleType: Win32LobAppRuleType;
  //#endregion
}