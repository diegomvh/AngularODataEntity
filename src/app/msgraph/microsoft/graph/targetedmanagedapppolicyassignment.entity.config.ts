import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
//#endregion

export const TargetedManagedAppPolicyAssignmentConfig = {
  name: "TargetedManagedAppPolicyAssignment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<TargetedManagedAppPolicyAssignment>;