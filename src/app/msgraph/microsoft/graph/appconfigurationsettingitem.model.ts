import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MdmAppConfigKeyType } from './mdmappconfigkeytype.enum';
import { AppConfigurationSettingItem } from './appconfigurationsettingitem.entity';
import { AppConfigurationSettingItemCollection } from './appconfigurationsettingitem.collection';
//#endregion

export class AppConfigurationSettingItemModel<E extends AppConfigurationSettingItem> extends ODataModel<E> {
  //#region ODataApi Properties
  appConfigKey: string;
  appConfigKeyType: MdmAppConfigKeyType;
  appConfigKeyValue: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}