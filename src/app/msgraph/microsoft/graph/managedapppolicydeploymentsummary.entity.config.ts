import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
//#endregion

export const ManagedAppPolicyDeploymentSummaryConfig = {
  name: "managedAppPolicyDeploymentSummary",
  base: "microsoft.graph.entity",
  model: ManagedAppPolicyDeploymentSummaryModel,
  collection: ManagedAppPolicyDeploymentSummaryCollection,
  annotations: [],
  fields: {
    configurationDeployedUserCount: {type: 'Edm.Int32', nullable: false},
    configurationDeploymentSummaryPerApp: {type: 'graph.managedAppPolicyDeploymentSummaryPerApp', collection: true},
    displayName: {type: 'Edm.String'},
    lastRefreshTime: {type: 'Edm.DateTimeOffset', nullable: false},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAppPolicyDeploymentSummary>;