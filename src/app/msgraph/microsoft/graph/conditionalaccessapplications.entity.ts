import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ConditionalAccessApplications {
  //#region ODataApi Properties
  includeApplications: string[];
  excludeApplications: string[];
  includeUserActions: string[];
  //#endregion
}