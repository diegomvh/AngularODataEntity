import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ServicePlanInfo {
  //#region ODataApi Properties
  appliesTo?: string;
  provisioningStatus?: string;
  servicePlanId?: string;
  servicePlanName?: string;
  //#endregion
}