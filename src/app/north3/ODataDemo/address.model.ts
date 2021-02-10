import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Address } from './address.complex';
import { AddressCollection } from './address.collection';
//#endregion

export class AddressModel<E extends Address> extends ODataModel<E> {
  //#region ODataApi Properties
  Street?: string;
  City?: string;
  State?: string;
  ZipCode?: string;
  Country?: string;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}