import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppleDeviceFeaturesConfigurationBaseCollection } from './appledevicefeaturesconfigurationbase.collection';
import { IosHomeScreenItem } from './ioshomescreenitem.complex';
import { IosHomeScreenPage } from './ioshomescreenpage.complex';
import { IosNotificationSettings } from './iosnotificationsettings.complex';
import { IosDeviceFeaturesConfiguration } from './iosdevicefeaturesconfiguration.entity';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
import { IosHomeScreenPageModel } from './ioshomescreenpage.model';
import { IosNotificationSettingsModel } from './iosnotificationsettings.model';
import { IosDeviceFeaturesConfigurationModel } from './iosdevicefeaturesconfiguration.model';
import { IosHomeScreenItemCollection } from './ioshomescreenitem.collection';
import { IosHomeScreenPageCollection } from './ioshomescreenpage.collection';
import { IosNotificationSettingsCollection } from './iosnotificationsettings.collection';
//#endregion

export class IosDeviceFeaturesConfigurationCollection<E extends IosDeviceFeaturesConfiguration, M extends IosDeviceFeaturesConfigurationModel<E>> extends AppleDeviceFeaturesConfigurationBaseCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}