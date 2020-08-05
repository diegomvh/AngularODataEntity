import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceOperatingSystemSummary {
  //#region ODataApi Properties
  androidCount: number;
  iosCount: number;
  macOSCount: number;
  windowsMobileCount: number;
  windowsCount: number;
  unknownCount: number;
  //#endregion
}