import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface SignInStatus {
  //#region ODataApi Properties
  errorCode?: number;
  failureReason?: string;
  additionalDetails?: string;
  //#endregion
}