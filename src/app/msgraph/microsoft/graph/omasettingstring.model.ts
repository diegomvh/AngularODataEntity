import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingString } from './omasettingstring.entity';
import { OmaSettingStringCollection } from './omasettingstring.collection';
//#endregion

export class OmaSettingStringModel<E extends OmaSettingString> extends OmaSettingModel<E> {
  //#region ODataApi Properties
  value: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}