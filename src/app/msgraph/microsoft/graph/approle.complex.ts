import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface AppRole {
  //#region ODataApi Properties
  allowedMemberTypes: string[];
  description?: string;
  displayName?: string;
  id: string;
  isEnabled: boolean;
  origin?: string;
  value?: string;
  //#endregion
}