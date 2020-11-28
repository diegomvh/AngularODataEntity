import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { DeviceEnrollmentPlatformRestriction } from './deviceenrollmentplatformrestriction.entity';
import { DeviceEnrollmentPlatformRestrictionModel } from './deviceenrollmentplatformrestriction.model';
import { DeviceEnrollmentConfigurationModel } from './deviceenrollmentconfiguration.model';
import { DeviceEnrollmentPlatformRestrictionCollection } from './deviceenrollmentplatformrestriction.collection';
import { DeviceEnrollmentConfigurationCollection } from './deviceenrollmentconfiguration.collection';
//#endregion

export interface DeviceEnrollmentPlatformRestrictionsConfiguration extends DeviceEnrollmentConfiguration {
  //#region ODataApi Properties
  androidRestriction?: DeviceEnrollmentPlatformRestriction;
  iosRestriction?: DeviceEnrollmentPlatformRestriction;
  macOSRestriction?: DeviceEnrollmentPlatformRestriction;
  windowsMobileRestriction?: DeviceEnrollmentPlatformRestriction;
  windowsRestriction?: DeviceEnrollmentPlatformRestriction;
  //#endregion
}