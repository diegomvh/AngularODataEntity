import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { TargetedManagedAppPolicyAssignmentCollection } from './targetedmanagedapppolicyassignment.collection';
//#endregion

export const TargetedManagedAppPolicyAssignmentConfig = {
  name: "targetedManagedAppPolicyAssignment",
  base: "microsoft.graph.entity",
  model: TargetedManagedAppPolicyAssignmentModel,
  collection: TargetedManagedAppPolicyAssignmentCollection,
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<TargetedManagedAppPolicyAssignment>;