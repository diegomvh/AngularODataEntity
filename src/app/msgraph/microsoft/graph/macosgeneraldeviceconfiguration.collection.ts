import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { AppListType } from './applisttype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.entity';
import { MacOSGeneralDeviceConfiguration } from './macosgeneraldeviceconfiguration.entity';
import { AppListItemModel } from './applistitem.model';
import { MacOSGeneralDeviceConfigurationModel } from './macosgeneraldeviceconfiguration.model';
import { AppListItemCollection } from './applistitem.collection';
//#endregion

export class MacOSGeneralDeviceConfigurationCollection<E extends MacOSGeneralDeviceConfiguration, M extends MacOSGeneralDeviceConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}