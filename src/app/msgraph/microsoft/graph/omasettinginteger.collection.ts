import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingCollection } from './omasetting.collection';
import { OmaSettingInteger } from './omasettinginteger.complex';
import { OmaSettingIntegerModel } from './omasettinginteger.model';
//#endregion

export class OmaSettingIntegerCollection<E extends OmaSettingInteger, M extends OmaSettingIntegerModel<E>> extends OmaSettingCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}