import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { InstallIntent } from './installintent.enum';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.entity';
import { MobileAppAssignment } from './mobileappassignment.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { MobileAppAssignmentModel } from './mobileappassignment.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
//#endregion

export class MobileAppAssignmentCollection<E extends MobileAppAssignment, M extends MobileAppAssignmentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}