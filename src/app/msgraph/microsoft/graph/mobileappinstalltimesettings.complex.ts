import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface MobileAppInstallTimeSettings {
  //#region ODataApi Properties
  deadlineDateTime?: Date;
  startDateTime?: Date;
  useLocalTime: boolean;
  //#endregion
}