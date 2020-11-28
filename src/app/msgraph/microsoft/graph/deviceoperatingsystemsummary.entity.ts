import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceOperatingSystemSummary {
  //#region ODataApi Properties
  androidCount: number;
  iosCount: number;
  macOSCount: number;
  unknownCount: number;
  windowsCount: number;
  windowsMobileCount: number;
  //#endregion
}