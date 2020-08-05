import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ServicePlanInfo {
  //#region ODataApi Properties
  servicePlanId?: string;
  servicePlanName?: string;
  provisioningStatus?: string;
  appliesTo?: string;
  //#endregion
}