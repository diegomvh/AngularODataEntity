import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LicenseAssignmentState } from './licenseassignmentstate.complex';
import { LicenseAssignmentStateCollection } from './licenseassignmentstate.collection';
//#endregion

export class LicenseAssignmentStateModel<E extends LicenseAssignmentState> extends ODataModel<E> {
  //#region ODataApi Properties
  assignedByGroup?: string;
  disabledPlans?: string[];
  error?: string;
  skuId?: string;
  state?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}