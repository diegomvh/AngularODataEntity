import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RunAsAccountType } from './runasaccounttype.enum';
import { Win32LobAppRestartBehavior } from './win32lobapprestartbehavior.enum';
//#endregion

export interface Win32LobAppInstallExperience {
  //#region ODataApi Properties
  deviceRestartBehavior: Win32LobAppRestartBehavior;
  runAsAccount: RunAsAccountType;
  //#endregion
}