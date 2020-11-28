import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { ComplianceManagementPartnerAssignment } from './compliancemanagementpartnerassignment.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { ComplianceManagementPartnerAssignmentCollection } from './compliancemanagementpartnerassignment.collection';
//#endregion

export class ComplianceManagementPartnerAssignmentModel<E extends ComplianceManagementPartnerAssignment> extends ODataModel<E> {
  //#region ODataApi Properties
  target?: DeviceAndAppManagementAssignmentTargetModel<DeviceAndAppManagementAssignmentTarget>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}