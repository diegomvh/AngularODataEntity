import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentConfiguration } from './deviceenrollmentconfiguration.entity';
//#endregion

export interface DeviceEnrollmentLimitConfiguration extends DeviceEnrollmentConfiguration {
  //#region ODataApi Properties
  limit: number;
  //#endregion
}