import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
//#endregion

export class SecurityVendorInformationCollection<E extends SecurityVendorInformation, M extends SecurityVendorInformationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}