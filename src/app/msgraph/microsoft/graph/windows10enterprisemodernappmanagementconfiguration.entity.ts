import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface Windows10EnterpriseModernAppManagementConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  uninstallBuiltInApps: boolean;
  //#endregion
}