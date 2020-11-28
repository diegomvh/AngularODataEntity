import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppleDeviceFeaturesConfigurationBaseModel } from './appledevicefeaturesconfigurationbase.model';
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenPage } from './ioshomescreenpage.complex';
import { IosNotificationSettings } from './iosnotificationsettings.complex';
import { IosDeviceFeaturesConfiguration } from './iosdevicefeaturesconfiguration.entity';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenPageModel } from './ioshomescreenpage.model';
import { IosNotificationSettingsModel } from './iosnotificationsettings.model';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
import { IosHomeScreenPageCollection } from './ioshomescreenpage.collection';
import { IosNotificationSettingsCollection } from './iosnotificationsettings.collection';
import { IosDeviceFeaturesConfigurationCollection } from './iosdevicefeaturesconfiguration.collection';
//#endregion

export class IosDeviceFeaturesConfigurationModel<E extends IosDeviceFeaturesConfiguration> extends AppleDeviceFeaturesConfigurationBaseModel<E> {
  //#region ODataApi Properties
  assetTagTemplate?: string;
  homeScreenDockIcons?: IosHomeScreenItemCollection<IosHomeScreenItem, IosHomeScreenItemModel<IosHomeScreenItem>>;
  homeScreenPages?: IosHomeScreenPageCollection<IosHomeScreenPage, IosHomeScreenPageModel<IosHomeScreenPage>>;
  lockScreenFootnote?: string;
  notificationSettings?: IosNotificationSettingsCollection<IosNotificationSettings, IosNotificationSettingsModel<IosNotificationSettings>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}