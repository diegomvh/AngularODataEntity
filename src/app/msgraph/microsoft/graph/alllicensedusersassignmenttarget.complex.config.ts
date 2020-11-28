import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AllLicensedUsersAssignmentTarget } from './alllicensedusersassignmenttarget.complex';
import { AllLicensedUsersAssignmentTargetModel } from './alllicensedusersassignmenttarget.model';
import { AllLicensedUsersAssignmentTargetCollection } from './alllicensedusersassignmenttarget.collection';
//#endregion

export const AllLicensedUsersAssignmentTargetConfig = {
  name: "allLicensedUsersAssignmentTarget",
  base: "microsoft.graph.deviceAndAppManagementAssignmentTarget",
  model: AllLicensedUsersAssignmentTargetModel,
  collection: AllLicensedUsersAssignmentTargetCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<AllLicensedUsersAssignmentTarget>;