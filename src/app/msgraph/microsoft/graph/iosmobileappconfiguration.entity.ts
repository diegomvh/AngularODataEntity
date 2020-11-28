import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfiguration } from './manageddevicemobileappconfiguration.entity';
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.complex';
import { AppConfigurationSettingItemModel } from './appconfigurationsettingitem.model';
import { ManagedDeviceMobileAppConfigurationModel } from './manageddevicemobileappconfiguration.model';
import { AppConfigurationSettingItemCollection } from './appconfigurationsettingitem.collection';
import { ManagedDeviceMobileAppConfigurationCollection } from './manageddevicemobileappconfiguration.collection';
//#endregion

export interface IosMobileAppConfiguration extends ManagedDeviceMobileAppConfiguration {
  //#region ODataApi Properties
  encodedSettingXml?: ArrayBuffer;
  settings?: AppConfigurationSettingItem[];
  //#endregion
}