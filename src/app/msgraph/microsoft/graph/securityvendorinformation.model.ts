import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
//#endregion

export class SecurityVendorInformationModel<E extends SecurityVendorInformation> extends ODataModel<E> {
  //#region ODataApi Properties
  provider?: string;
  providerVersion?: string;
  subProvider?: string;
  vendor?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}