import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ConditionalAccessUsers {
  //#region ODataApi Properties
  includeUsers: string[];
  excludeUsers: string[];
  includeGroups: string[];
  excludeGroups: string[];
  includeRoles: string[];
  excludeRoles: string[];
  //#endregion
}