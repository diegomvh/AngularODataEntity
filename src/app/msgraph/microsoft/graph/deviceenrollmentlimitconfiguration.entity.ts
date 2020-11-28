import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
import { DeviceEnrollmentConfigurationModel } from './deviceenrollmentconfiguration.model';
import { DeviceEnrollmentConfigurationCollection } from './deviceenrollmentconfiguration.collection';
//#endregion

export interface DeviceEnrollmentLimitConfiguration extends DeviceEnrollmentConfiguration {
  //#region ODataApi Properties
  limit: number;
  //#endregion
}