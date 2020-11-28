import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingBase64 } from './omasettingbase64.entity';
import { OmaSettingBase64Collection } from './omasettingbase64.collection';
//#endregion

export class OmaSettingBase64Model<E extends OmaSettingBase64> extends OmaSettingModel<E> {
  //#region ODataApi Properties
  fileName?: string;
  value: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}