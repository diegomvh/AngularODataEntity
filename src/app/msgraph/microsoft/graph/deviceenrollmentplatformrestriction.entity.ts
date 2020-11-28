import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceEnrollmentPlatformRestriction {
  //#region ODataApi Properties
  osMaximumVersion?: string;
  osMinimumVersion?: string;
  personalDeviceEnrollmentBlocked: boolean;
  platformBlocked: boolean;
  //#endregion
}