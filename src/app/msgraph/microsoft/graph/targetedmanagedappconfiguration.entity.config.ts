import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TargetedManagedAppConfiguration } from './targetedmanagedappconfiguration.entity';
//#endregion

export const TargetedManagedAppConfigurationConfig = {
  name: "TargetedManagedAppConfiguration",
  base: "microsoft.graph.managedAppConfiguration",
  annotations: [],
  fields: {
    deployedAppCount: {type: 'Edm.Int32', nullable: false},
    isAssigned: {type: 'Edm.Boolean', nullable: false},
    apps: {type: 'graph.managedMobileApp', collection: true, navigation: true},
    deploymentSummary: {type: 'graph.managedAppPolicyDeploymentSummary', navigation: true},
    assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true, navigation: true}
  }
} as EntityConfig<TargetedManagedAppConfiguration>;