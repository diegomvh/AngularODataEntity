import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRuleOperator } from './win32lobappruleoperator.enum';
//#endregion

export const Win32LobAppRuleOperatorConfig = {
  name: "win32LobAppRuleOperator",
  members: Win32LobAppRuleOperator
} as EnumTypeConfig<Win32LobAppRuleOperator>;