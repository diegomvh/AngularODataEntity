import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AppleDeviceFeaturesConfigurationBase } from './appledevicefeaturesconfigurationbase.entity';
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenPage } from './ioshomescreenpage.complex';
import { IosNotificationSettings } from './iosnotificationsettings.complex';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenPageModel } from './ioshomescreenpage.model';
import { IosNotificationSettingsModel } from './iosnotificationsettings.model';
import { AppleDeviceFeaturesConfigurationBaseModel } from './appledevicefeaturesconfigurationbase.model';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
import { IosHomeScreenPageCollection } from './ioshomescreenpage.collection';
import { IosNotificationSettingsCollection } from './iosnotificationsettings.collection';
import { AppleDeviceFeaturesConfigurationBaseCollection } from './appledevicefeaturesconfigurationbase.collection';
//#endregion

export interface IosDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase {
  //#region ODataApi Properties
  assetTagTemplate?: string;
  homeScreenDockIcons?: IosHomeScreenItem[];
  homeScreenPages?: IosHomeScreenPage[];
  lockScreenFootnote?: string;
  notificationSettings?: IosNotificationSettings[];
  //#endregion
}