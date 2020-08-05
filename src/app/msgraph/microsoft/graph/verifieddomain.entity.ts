import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface VerifiedDomain {
  //#region ODataApi Properties
  capabilities?: string;
  isDefault?: boolean;
  isInitial?: boolean;
  name?: string;
  type?: string;
  //#endregion
}