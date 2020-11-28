import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfigurationModel } from './manageddevicemobileappconfiguration.model';
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.complex';
import { IosMobileAppConfiguration } from './iosmobileappconfiguration.entity';
import { AppConfigurationSettingItemModel } from './appconfigurationsettingitem.model';
import { AppConfigurationSettingItemCollection } from './appconfigurationsettingitem.collection';
import { IosMobileAppConfigurationCollection } from './iosmobileappconfiguration.collection';
//#endregion

export class IosMobileAppConfigurationModel<E extends IosMobileAppConfiguration> extends ManagedDeviceMobileAppConfigurationModel<E> {
  //#region ODataApi Properties
  encodedSettingXml?: ArrayBuffer;
  settings?: AppConfigurationSettingItemCollection<AppConfigurationSettingItem, AppConfigurationSettingItemModel<AppConfigurationSettingItem>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}