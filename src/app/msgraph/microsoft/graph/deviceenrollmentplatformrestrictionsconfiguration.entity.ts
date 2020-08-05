import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.entity';
//#endregion

export interface DeviceEnrollmentPlatformRestrictionsConfiguration extends DeviceEnrollmentConfiguration {
  //#region ODataApi Properties
  iosRestriction?: DeviceEnrollmentPlatformRestriction;
  windowsRestriction?: DeviceEnrollmentPlatformRestriction;
  windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction;
  androidRestriction?: DeviceEnrollmentPlatformRestriction;
  macOSRestriction?: DeviceEnrollmentPlatformRestriction;
  //#endregion
}