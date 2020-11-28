import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PhysicalAddress } from './physicaladdress.complex';
import { PhysicalAddressCollection } from './physicaladdress.collection';
//#endregion

export class PhysicalAddressModel<E extends PhysicalAddress> extends ODataModel<E> {
  //#region ODataApi Properties
  city?: string;
  countryOrRegion?: string;
  postalCode?: string;
  state?: string;
  street?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}