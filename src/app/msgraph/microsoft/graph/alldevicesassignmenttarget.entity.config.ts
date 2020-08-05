import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AllDevicesAssignmentTarget } from './alldevicesassignmenttarget.entity';
//#endregion

export const AllDevicesAssignmentTargetConfig = {
  name: "AllDevicesAssignmentTarget",
  base: "microsoft.graph.deviceAndAppManagementAssignmentTarget",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<AllDevicesAssignmentTarget>;