import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface AlternativeSecurityId {
  //#region ODataApi Properties
  type?: number;
  identityProvider?: string;
  key?: ArrayBuffer;
  //#endregion
}