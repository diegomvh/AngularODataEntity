import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AllLicensedUsersAssignmentTarget } from './alllicensedusersassignmenttarget.entity';
//#endregion

export const AllLicensedUsersAssignmentTargetConfig = {
  name: "allLicensedUsersAssignmentTarget",
  base: "microsoft.graph.deviceAndAppManagementAssignmentTarget",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<AllLicensedUsersAssignmentTarget>;