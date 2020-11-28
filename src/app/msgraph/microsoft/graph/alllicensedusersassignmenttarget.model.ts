import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { AllLicensedUsersAssignmentTarget } from './alllicensedusersassignmenttarget.complex';
import { AllLicensedUsersAssignmentTargetCollection } from './alllicensedusersassignmenttarget.collection';
//#endregion

export class AllLicensedUsersAssignmentTargetModel<E extends AllLicensedUsersAssignmentTarget> extends DeviceAndAppManagementAssignmentTargetModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}