import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.complex';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export class OmaSettingModel<E extends OmaSetting> extends ODataModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName: string;
  omaUri: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}