import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.complex';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
//#endregion

export const DeviceAndAppManagementAssignmentTargetConfig = {
  name: "deviceAndAppManagementAssignmentTarget",
  model: DeviceAndAppManagementAssignmentTargetModel,
  collection: DeviceAndAppManagementAssignmentTargetCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<DeviceAndAppManagementAssignmentTarget>;