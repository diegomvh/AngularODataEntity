import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface WindowsInformationProtectionDataRecoveryCertificate {
  //#region ODataApi Properties
  certificate?: ArrayBuffer;
  description?: string;
  expirationDateTime: Date;
  subjectName?: string;
  //#endregion
}