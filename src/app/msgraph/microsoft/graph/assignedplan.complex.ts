import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface AssignedPlan {
  //#region ODataApi Properties
  assignedDateTime?: Date;
  capabilityStatus?: string;
  service?: string;
  servicePlanId?: string;
  //#endregion
}