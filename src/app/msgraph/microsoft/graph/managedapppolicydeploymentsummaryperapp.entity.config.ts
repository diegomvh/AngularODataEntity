import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.entity';
import { ManagedAppPolicyDeploymentSummaryPerAppModel } from './managedapppolicydeploymentsummaryperapp.model';
import { ManagedAppPolicyDeploymentSummaryPerAppCollection } from './managedapppolicydeploymentsummaryperapp.collection';
//#endregion

export const ManagedAppPolicyDeploymentSummaryPerAppConfig = {
  name: "managedAppPolicyDeploymentSummaryPerApp",
  model: ManagedAppPolicyDeploymentSummaryPerAppModel,
  collection: ManagedAppPolicyDeploymentSummaryPerAppCollection,
  annotations: [],
  fields: {
    configurationAppliedUserCount: {type: 'Edm.Int32', nullable: false},
    mobileAppIdentifier: {type: 'graph.mobileAppIdentifier'}
  }
} as EntityConfig<ManagedAppPolicyDeploymentSummaryPerApp>;