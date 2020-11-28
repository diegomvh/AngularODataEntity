import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AllDevicesAssignmentTarget } from './alldevicesassignmenttarget.entity';
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
} as EntityConfig<AllDevicesAssignmentTarget>;