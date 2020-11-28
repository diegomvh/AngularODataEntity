import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfigurationCollection } from './manageddevicemobileappconfiguration.collection';
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.complex';
import { IosMobileAppConfiguration } from './iosmobileappconfiguration.entity';
import { AppConfigurationSettingItemModel } from './appconfigurationsettingitem.model';
import { IosMobileAppConfigurationModel } from './iosmobileappconfiguration.model';
import { AppConfigurationSettingItemCollection } from './appconfigurationsettingitem.collection';
//#endregion

export class IosMobileAppConfigurationCollection<E extends IosMobileAppConfiguration, M extends IosMobileAppConfigurationModel<E>> extends ManagedDeviceMobileAppConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}