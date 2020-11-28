import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface Win32LobAppRestartSettings {
  //#region ODataApi Properties
  countdownDisplayBeforeRestartInMinutes: number;
  gracePeriodInMinutes: number;
  restartNotificationSnoozeDurationInMinutes?: number;
  //#endregion
}