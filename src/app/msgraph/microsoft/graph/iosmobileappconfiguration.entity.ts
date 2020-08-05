import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.entity';
//#endregion

export interface IosMobileAppConfiguration extends ManagedDeviceMobileAppConfiguration {
  //#region ODataApi Properties
  encodedSettingXml?: ArrayBuffer;
  settings?: AppConfigurationSettingItem[];
  //#endregion
}