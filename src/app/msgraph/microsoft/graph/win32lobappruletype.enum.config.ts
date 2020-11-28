import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRuleType } from './win32lobappruletype.enum';
//#endregion

export const Win32LobAppRuleTypeConfig = {
  name: "win32LobAppRuleType",
  members: Win32LobAppRuleType
} as EnumTypeConfig<Win32LobAppRuleType>;