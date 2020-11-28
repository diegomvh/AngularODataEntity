import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SettingValue } from './settingvalue.entity';
import { SettingValueCollection } from './settingvalue.collection';
//#endregion

export class SettingValueModel<E extends SettingValue> extends ODataModel<E> {
  //#region ODataApi Properties
  name?: string;
  value?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}