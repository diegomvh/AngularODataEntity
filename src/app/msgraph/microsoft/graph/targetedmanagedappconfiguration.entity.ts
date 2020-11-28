import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppConfiguration } from './managedappconfiguration.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { ManagedAppConfigurationModel } from './managedappconfiguration.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppPolicyDeploymentSummaryModel } from './managedapppolicydeploymentsummary.model';
import { TargetedManagedAppPolicyAssignmentModel } from './targetedmanagedapppolicyassignment.model';
import { ManagedAppConfigurationCollection } from './managedappconfiguration.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
import { ManagedAppPolicyDeploymentSummaryCollection } from './managedapppolicydeploymentsummary.collection';
import { TargetedManagedAppPolicyAssignmentCollection } from './targetedmanagedapppolicyassignment.collection';
//#endregion

export interface TargetedManagedAppConfiguration extends ManagedAppConfiguration {
  //#region ODataApi Properties
  deployedAppCount: number;
  isAssigned: boolean;
  apps?: ManagedMobileApp[];
  assignments?: TargetedManagedAppPolicyAssignment[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  //#endregion
}