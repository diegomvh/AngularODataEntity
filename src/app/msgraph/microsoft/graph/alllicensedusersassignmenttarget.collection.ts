import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { AllLicensedUsersAssignmentTarget } from './alllicensedusersassignmenttarget.entity';
import { AllLicensedUsersAssignmentTargetModel } from './alllicensedusersassignmenttarget.model';
//#endregion

export class AllLicensedUsersAssignmentTargetCollection<E extends AllLicensedUsersAssignmentTarget, M extends AllLicensedUsersAssignmentTargetModel<E>> extends DeviceAndAppManagementAssignmentTargetCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}