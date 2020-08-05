import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface FileEncryptionInfo {
  //#region ODataApi Properties
  encryptionKey?: ArrayBuffer;
  initializationVector?: ArrayBuffer;
  mac?: ArrayBuffer;
  macKey?: ArrayBuffer;
  profileIdentifier?: string;
  fileDigest?: ArrayBuffer;
  fileDigestAlgorithm?: string;
  //#endregion
}