import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
import { AppListType } from './applisttype.enum';
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
import { AppListItem } from './applistitem.entity';
import { AndroidGeneralDeviceConfiguration } from './androidgeneraldeviceconfiguration.entity';
import { AppListItemModel } from './applistitem.model';
import { AndroidGeneralDeviceConfigurationModel } from './androidgeneraldeviceconfiguration.model';
import { AppListItemCollection } from './applistitem.collection';
//#endregion

export class AndroidGeneralDeviceConfigurationCollection<E extends AndroidGeneralDeviceConfiguration, M extends AndroidGeneralDeviceConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}