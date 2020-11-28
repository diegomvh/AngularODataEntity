import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LicenseUnitsDetail } from './licenseunitsdetail.complex';
import { LicenseUnitsDetailCollection } from './licenseunitsdetail.collection';
//#endregion

export class LicenseUnitsDetailModel<E extends LicenseUnitsDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  enabled?: number;
  suspended?: number;
  warning?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}