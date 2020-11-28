import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface AlternativeSecurityId {
  //#region ODataApi Properties
  identityProvider?: string;
  key?: ArrayBuffer;
  type?: number;
  //#endregion
}