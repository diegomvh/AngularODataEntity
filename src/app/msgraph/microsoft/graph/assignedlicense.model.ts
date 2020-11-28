import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AssignedLicense } from './assignedlicense.complex';
import { AssignedLicenseCollection } from './assignedlicense.collection';
//#endregion

export class AssignedLicenseModel<E extends AssignedLicense> extends ODataModel<E> {
  //#region ODataApi Properties
  disabledPlans: string[];
  skuId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}