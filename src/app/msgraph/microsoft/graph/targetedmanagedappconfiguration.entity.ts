import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppConfiguration } from './managedappconfiguration.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { TargetedManagedAppPolicyAssignment } from './targetedmanagedapppolicyassignment.entity';
import { ManagedAppPolicyDeploymentSummary } from './managedapppolicydeploymentsummary.entity';
//#endregion

export interface TargetedManagedAppConfiguration extends ManagedAppConfiguration {
  //#region ODataApi Properties
  deployedAppCount: number;
  isAssigned: boolean;
  apps?: ManagedMobileApp[];
  deploymentSummary?: ManagedAppPolicyDeploymentSummary;
  assignments?: TargetedManagedAppPolicyAssignment[];
  //#endregion
}