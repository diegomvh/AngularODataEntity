import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { InstallIntent } from './installintent.enum';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { EntityModel } from './entity.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ManagedEBookAssignment extends Entity {
  //#region ODataApi Properties
  installIntent: InstallIntent;
  target?: DeviceAndAppManagementAssignmentTarget;
  //#endregion
}