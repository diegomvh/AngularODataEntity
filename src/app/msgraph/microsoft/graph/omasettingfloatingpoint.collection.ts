import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingCollection } from './omasetting.collection';
import { OmaSettingFloatingPoint } from './omasettingfloatingpoint.entity';
import { OmaSettingFloatingPointModel } from './omasettingfloatingpoint.model';
//#endregion

export class OmaSettingFloatingPointCollection<E extends OmaSettingFloatingPoint, M extends OmaSettingFloatingPointModel<E>> extends OmaSettingCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}