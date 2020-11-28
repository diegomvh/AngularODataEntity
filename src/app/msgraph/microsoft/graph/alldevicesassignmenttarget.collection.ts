import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { AllDevicesAssignmentTarget } from './alldevicesassignmenttarget.entity';
import { AllDevicesAssignmentTargetModel } from './alldevicesassignmenttarget.model';
//#endregion

export class AllDevicesAssignmentTargetCollection<E extends AllDevicesAssignmentTarget, M extends AllDevicesAssignmentTargetModel<E>> extends DeviceAndAppManagementAssignmentTargetCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}