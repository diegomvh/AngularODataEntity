import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface WindowsInformationProtectionDataRecoveryCertificate {
  //#region ODataApi Properties
  subjectName?: string;
  description?: string;
  expirationDateTime: Date;
  certificate?: ArrayBuffer;
  //#endregion
}