import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ConditionalAccessUsers {
  //#region ODataApi Properties
  excludeGroups: string[];
  excludeRoles: string[];
  excludeUsers: string[];
  includeGroups: string[];
  includeRoles: string[];
  includeUsers: string[];
  //#endregion
}