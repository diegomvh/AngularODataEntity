import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRegistryRuleOperationType } from './win32lobappregistryruleoperationtype.enum';
//#endregion

export const Win32LobAppRegistryRuleOperationTypeConfig = {
  name: "win32LobAppRegistryRuleOperationType",
  members: Win32LobAppRegistryRuleOperationType
} as EnumTypeConfig<Win32LobAppRegistryRuleOperationType>;