import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingDateTime } from './omasettingdatetime.complex';
import { OmaSettingDateTimeCollection } from './omasettingdatetime.collection';
//#endregion

export class OmaSettingDateTimeModel<E extends OmaSettingDateTime> extends OmaSettingModel<E> {
  //#region ODataApi Properties
  value: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}