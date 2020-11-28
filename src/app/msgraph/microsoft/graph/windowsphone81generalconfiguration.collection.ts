import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { AppListType } from './applisttype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.entity';
import { WindowsPhone81GeneralConfiguration } from './windowsphone81generalconfiguration.entity';
import { AppListItemModel } from './applistitem.model';
import { WindowsPhone81GeneralConfigurationModel } from './windowsphone81generalconfiguration.model';
import { AppListItemCollection } from './applistitem.collection';
//#endregion

export class WindowsPhone81GeneralConfigurationCollection<E extends WindowsPhone81GeneralConfiguration, M extends WindowsPhone81GeneralConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}