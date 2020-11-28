import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppProtection } from './targetedmanagedappprotection.entity';
import { TargetedManagedAppProtectionModel } from './targetedmanagedappprotection.model';
import { TargetedManagedAppProtectionCollection } from './targetedmanagedappprotection.collection';
//#endregion

export const TargetedManagedAppProtectionConfig = {
  name: "targetedManagedAppProtection",
  base: "microsoft.graph.managedAppProtection",
  model: TargetedManagedAppProtectionModel,
  collection: TargetedManagedAppProtectionCollection,
  annotations: [],
  fields: {
    isAssigned: {type: 'Edm.Boolean', nullable: false},
    assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true, navigation: true}
  }
} as EntityConfig<TargetedManagedAppProtection>;