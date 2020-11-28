import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ConditionalAccessApplications {
  //#region ODataApi Properties
  excludeApplications: string[];
  includeApplications: string[];
  includeUserActions: string[];
  //#endregion
}