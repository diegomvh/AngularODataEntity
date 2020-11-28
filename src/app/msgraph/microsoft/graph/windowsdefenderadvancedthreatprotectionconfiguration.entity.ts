import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface WindowsDefenderAdvancedThreatProtectionConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  allowSampleSharing: boolean;
  enableExpeditedTelemetryReporting: boolean;
  //#endregion
}