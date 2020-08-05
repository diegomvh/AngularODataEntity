import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceEnrollmentPlatformRestriction {
  //#region ODataApi Properties
  platformBlocked: boolean;
  personalDeviceEnrollmentBlocked: boolean;
  osMinimumVersion?: string;
  osMaximumVersion?: string;
  //#endregion
}