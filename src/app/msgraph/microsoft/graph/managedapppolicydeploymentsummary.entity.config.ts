import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
//#endregion

export const ManagedAppPolicyDeploymentSummaryConfig = {
  name: "managedAppPolicyDeploymentSummary",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    configurationDeployedUserCount: {type: 'Edm.Int32', nullable: false},
    lastRefreshTime: {type: 'Edm.DateTimeOffset', nullable: false},
    configurationDeploymentSummaryPerApp: {type: 'graph.managedAppPolicyDeploymentSummaryPerApp', collection: true},
    version: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedAppPolicyDeploymentSummary>;