import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AppleDeviceFeaturesConfigurationBase } from './appledevicefeaturesconfigurationbase.entity';
import { IosHomeScreenItem } from './ioshomescreenitem.entity';
import { IosHomeScreenPage } from './ioshomescreenpage.entity';
import { IosNotificationSettings } from './iosnotificationsettings.entity';
//#endregion

export interface IosDeviceFeaturesConfiguration extends AppleDeviceFeaturesConfigurationBase {
  //#region ODataApi Properties
  assetTagTemplate?: string;
  lockScreenFootnote?: string;
  homeScreenDockIcons?: IosHomeScreenItem[];
  homeScreenPages?: IosHomeScreenPage[];
  notificationSettings?: IosNotificationSettings[];
  //#endregion
}