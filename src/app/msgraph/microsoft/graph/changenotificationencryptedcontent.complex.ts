import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ChangeNotificationEncryptedContent {
  //#region ODataApi Properties
  data: string;
  dataKey: string;
  dataSignature: string;
  encryptionCertificateId: string;
  encryptionCertificateThumbprint: string;
  //#endregion
}