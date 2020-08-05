import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
//#endregion

export const TargetedManagedAppProtectionConfig = {
  name: "TargetedManagedAppProtection",
  base: "microsoft.graph.managedAppProtection",
  annotations: [],
  fields: {
    isAssigned: {type: 'Edm.Boolean', nullable: false},
    assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true, navigation: true}
  }
} as EntityConfig<TargetedManagedAppProtection>;