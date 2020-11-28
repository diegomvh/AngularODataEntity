import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppConfiguration } from './targetedmanagedappconfiguration.entity';
import { TargetedManagedAppConfigurationModel } from './targetedmanagedappconfiguration.model';
import { TargetedManagedAppConfigurationCollection } from './targetedmanagedappconfiguration.collection';
//#endregion

export const TargetedManagedAppConfigurationConfig = {
  name: "targetedManagedAppConfiguration",
  base: "microsoft.graph.managedAppConfiguration",
  model: TargetedManagedAppConfigurationModel,
  collection: TargetedManagedAppConfigurationCollection,
  annotations: [],
  fields: {
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    isAssigned: {type: 'Edm.Boolean', nullable: false},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true}
  }
} as EntityConfig<TargetedManagedAppConfiguration>;