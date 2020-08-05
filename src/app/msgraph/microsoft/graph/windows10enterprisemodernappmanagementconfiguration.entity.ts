import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
//#endregion

export interface Windows10EnterpriseModernAppManagementConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  uninstallBuiltInApps: boolean;
  //#endregion
}