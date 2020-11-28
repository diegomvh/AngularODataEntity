import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingCollection } from './omasetting.collection';
import { OmaSettingDateTime } from './omasettingdatetime.complex';
import { OmaSettingDateTimeModel } from './omasettingdatetime.model';
//#endregion

export class OmaSettingDateTimeCollection<E extends OmaSettingDateTime, M extends OmaSettingDateTimeModel<E>> extends OmaSettingCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}