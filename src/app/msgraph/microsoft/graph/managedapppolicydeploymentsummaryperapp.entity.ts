import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.entity';
//#endregion

export interface ManagedAppPolicyDeploymentSummaryPerApp {
  //#region ODataApi Properties
  mobileAppIdentifier?: MobileAppIdentifier;
  configurationAppliedUserCount: number;
  //#endregion
}