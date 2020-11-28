import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PasswordCredential {
  //#region ODataApi Properties
  customKeyIdentifier?: ArrayBuffer;
  displayName?: string;
  endDateTime?: Date;
  hint?: string;
  keyId?: string;
  secretText?: string;
  startDateTime?: Date;
  //#endregion
}