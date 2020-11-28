import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PreAuthorizedApplication {
  //#region ODataApi Properties
  appId?: string;
  delegatedPermissionIds: string[];
  //#endregion
}