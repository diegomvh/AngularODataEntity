import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingCollection } from './omasetting.collection';
import { OmaSettingString } from './omasettingstring.complex';
import { OmaSettingStringModel } from './omasettingstring.model';
//#endregion

export class OmaSettingStringCollection<E extends OmaSettingString, M extends OmaSettingStringModel<E>> extends OmaSettingCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}