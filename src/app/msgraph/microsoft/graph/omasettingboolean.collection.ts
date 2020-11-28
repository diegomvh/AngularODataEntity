import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingCollection } from './omasetting.collection';
import { OmaSettingBoolean } from './omasettingboolean.entity';
import { OmaSettingBooleanModel } from './omasettingboolean.model';
//#endregion

export class OmaSettingBooleanCollection<E extends OmaSettingBoolean, M extends OmaSettingBooleanModel<E>> extends OmaSettingCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}