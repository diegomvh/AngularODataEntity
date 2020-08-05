import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.entity';
//#endregion

export interface ManagedAppPolicyDeploymentSummary extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  configurationDeployedUserCount: number;
  lastRefreshTime: Date;
  configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[];
  version?: string;
  //#endregion
}