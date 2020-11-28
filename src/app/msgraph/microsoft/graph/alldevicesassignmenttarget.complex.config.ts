import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AllDevicesAssignmentTarget } from './alldevicesassignmenttarget.complex';
import { AllDevicesAssignmentTargetModel } from './alldevicesassignmenttarget.model';
import { AllDevicesAssignmentTargetCollection } from './alldevicesassignmenttarget.collection';
//#endregion

export const AllDevicesAssignmentTargetConfig = {
  name: "allDevicesAssignmentTarget",
  base: "microsoft.graph.deviceAndAppManagementAssignmentTarget",
  model: AllDevicesAssignmentTargetModel,
  collection: AllDevicesAssignmentTargetCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<AllDevicesAssignmentTarget>;