import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { AllDevicesAssignmentTarget } from './alldevicesassignmenttarget.complex';
import { AllDevicesAssignmentTargetCollection } from './alldevicesassignmenttarget.collection';
//#endregion

export class AllDevicesAssignmentTargetModel<E extends AllDevicesAssignmentTarget> extends DeviceAndAppManagementAssignmentTargetModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}