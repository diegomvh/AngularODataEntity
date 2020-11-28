import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocaleInfo } from './localeinfo.complex';
import { LocaleInfoCollection } from './localeinfo.collection';
//#endregion

export class LocaleInfoModel<E extends LocaleInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  locale?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}