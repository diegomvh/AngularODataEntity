import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppRestartBehavior } from './win32lobapprestartbehavior.enum';
//#endregion

export const Win32LobAppRestartBehaviorConfig = {
  name: "win32LobAppRestartBehavior",
  members: Win32LobAppRestartBehavior
} as EnumTypeConfig<Win32LobAppRestartBehavior>;