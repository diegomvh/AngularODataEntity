import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PhysicalOfficeAddress } from './physicalofficeaddress.complex';
import { PhysicalOfficeAddressCollection } from './physicalofficeaddress.collection';
//#endregion

export class PhysicalOfficeAddressModel<E extends PhysicalOfficeAddress> extends ODataModel<E> {
  //#region ODataApi Properties
  city?: string;
  countryOrRegion?: string;
  officeLocation?: string;
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