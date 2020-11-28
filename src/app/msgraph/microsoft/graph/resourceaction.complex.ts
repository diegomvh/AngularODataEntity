import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ResourceAction {
  //#region ODataApi Properties
  allowedResourceActions?: string[];
  notAllowedResourceActions?: string[];
  //#endregion
}