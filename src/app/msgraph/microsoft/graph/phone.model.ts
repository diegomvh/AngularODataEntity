import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PhoneType } from './phonetype.enum';
import { Phone } from './phone.complex';
import { PhoneCollection } from './phone.collection';
//#endregion

export class PhoneModel<E extends Phone> extends ODataModel<E> {
  //#region ODataApi Properties
  language?: string;
  number?: string;
  region?: string;
  type?: PhoneType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}