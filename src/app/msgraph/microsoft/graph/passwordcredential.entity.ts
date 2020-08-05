import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PasswordCredential {
  //#region ODataApi Properties
  customKeyIdentifier?: ArrayBuffer;
  displayName?: string;
  endDateTime?: Date;
  keyId?: string;
  startDateTime?: Date;
  secretText?: string;
  hint?: string;
  //#endregion
}