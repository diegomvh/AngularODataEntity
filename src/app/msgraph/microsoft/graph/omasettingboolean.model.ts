import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingBoolean } from './omasettingboolean.entity';
import { OmaSettingBooleanCollection } from './omasettingboolean.collection';
//#endregion

export class OmaSettingBooleanModel<E extends OmaSettingBoolean> extends OmaSettingModel<E> {
  //#region ODataApi Properties
  value: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}