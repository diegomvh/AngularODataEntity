import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.complex';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
//#endregion

export interface ManagedAppPolicyDeploymentSummaryPerApp {
  //#region ODataApi Properties
  configurationAppliedUserCount: number;
  mobileAppIdentifier?: MobileAppIdentifier;
  //#endregion
}