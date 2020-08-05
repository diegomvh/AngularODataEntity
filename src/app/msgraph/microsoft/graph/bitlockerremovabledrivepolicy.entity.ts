import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BitLockerEncryptionMethod } from './bitlockerencryptionmethod.enum';
//#endregion

export interface BitLockerRemovableDrivePolicy {
  //#region ODataApi Properties
  encryptionMethod?: BitLockerEncryptionMethod;
  requireEncryptionForWriteAccess: boolean;
  blockCrossOrganizationWriteAccess: boolean;
  //#endregion
}