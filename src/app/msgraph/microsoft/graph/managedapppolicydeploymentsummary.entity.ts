import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedAppPolicyDeploymentSummaryPerApp } from './managedapppolicydeploymentsummaryperapp.entity';
import { ManagedAppPolicyDeploymentSummaryPerAppModel } from './managedapppolicydeploymentsummaryperapp.model';
import { EntityModel } from './entity.model';
import { ManagedAppPolicyDeploymentSummaryPerAppCollection } from './managedapppolicydeploymentsummaryperapp.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ManagedAppPolicyDeploymentSummary extends Entity {
  //#region ODataApi Properties
  configurationDeployedUserCount: number;
  configurationDeploymentSummaryPerApp?: ManagedAppPolicyDeploymentSummaryPerApp[];
  displayName?: string;
  lastRefreshTime: Date;
  version?: string;
  //#endregion
}