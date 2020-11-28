import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingFloatingPoint } from './omasettingfloatingpoint.entity';
import { OmaSettingFloatingPointCollection } from './omasettingfloatingpoint.collection';
//#endregion

export class OmaSettingFloatingPointModel<E extends OmaSettingFloatingPoint> extends OmaSettingModel<E> {
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