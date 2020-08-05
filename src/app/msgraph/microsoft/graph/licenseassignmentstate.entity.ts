import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface LicenseAssignmentState {
  //#region ODataApi Properties
  skuId?: string;
  disabledPlans?: string[];
  assignedByGroup?: string;
  state?: string;
  error?: string;
  //#endregion
}