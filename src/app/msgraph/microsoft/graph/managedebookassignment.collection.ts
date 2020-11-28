import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { InstallIntent } from './installintent.enum';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { ManagedEBookAssignment } from './managedebookassignment.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { ManagedEBookAssignmentModel } from './managedebookassignment.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
//#endregion

export class ManagedEBookAssignmentCollection<E extends ManagedEBookAssignment, M extends ManagedEBookAssignmentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}