import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingInteger } from './omasettinginteger.entity';
import { OmaSettingIntegerCollection } from './omasettinginteger.collection';
//#endregion

export class OmaSettingIntegerModel<E extends OmaSettingInteger> extends OmaSettingModel<E> {
  //#region ODataApi Properties
  value: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}