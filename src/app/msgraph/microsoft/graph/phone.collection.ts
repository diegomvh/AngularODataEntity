import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PhoneType } from './phonetype.enum';
import { Phone } from './phone.complex';
import { PhoneModel } from './phone.model';
//#endregion

export class PhoneCollection<E extends Phone, M extends PhoneModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}