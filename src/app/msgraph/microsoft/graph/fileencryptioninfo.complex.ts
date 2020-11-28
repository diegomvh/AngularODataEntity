import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface FileEncryptionInfo {
  //#region ODataApi Properties
  encryptionKey?: ArrayBuffer;
  fileDigest?: ArrayBuffer;
  fileDigestAlgorithm?: string;
  initializationVector?: ArrayBuffer;
  mac?: ArrayBuffer;
  macKey?: ArrayBuffer;
  profileIdentifier?: string;
  //#endregion
}