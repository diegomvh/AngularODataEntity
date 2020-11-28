import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MdmAppConfigKeyType } from './mdmappconfigkeytype.enum';
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.entity';
import { AppConfigurationSettingItemModel } from './appconfigurationsettingitem.model';
//#endregion

export class AppConfigurationSettingItemCollection<E extends AppConfigurationSettingItem, M extends AppConfigurationSettingItemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}