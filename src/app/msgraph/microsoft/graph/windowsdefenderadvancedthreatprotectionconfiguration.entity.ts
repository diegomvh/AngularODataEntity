import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
//#endregion

export interface WindowsDefenderAdvancedThreatProtectionConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  allowSampleSharing: boolean;
  enableExpeditedTelemetryReporting: boolean;
  //#endregion
}