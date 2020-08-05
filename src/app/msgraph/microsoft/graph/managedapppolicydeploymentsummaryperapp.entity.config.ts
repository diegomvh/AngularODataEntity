import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.entity';
//#endregion

export const ManagedAppPolicyDeploymentSummaryPerAppConfig = {
  name: "managedAppPolicyDeploymentSummaryPerApp",
  annotations: [],
  fields: {
    mobileAppIdentifier: {type: 'graph.mobileAppIdentifier'},
    configurationAppliedUserCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<ManagedAppPolicyDeploymentSummaryPerApp>;