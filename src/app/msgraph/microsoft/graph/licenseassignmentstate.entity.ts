import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface LicenseAssignmentState {
  //#region ODataApi Properties
  assignedByGroup?: string;
  disabledPlans?: string[];
  error?: string;
  skuId?: string;
  state?: string;
  //#endregion
}