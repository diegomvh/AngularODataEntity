import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BitLockerEncryptionMethod } from './bitlockerencryptionmethod.enum';
//#endregion

export interface BitLockerRemovableDrivePolicy {
  //#region ODataApi Properties
  blockCrossOrganizationWriteAccess: boolean;
  encryptionMethod?: BitLockerEncryptionMethod;
  requireEncryptionForWriteAccess: boolean;
  //#endregion
}