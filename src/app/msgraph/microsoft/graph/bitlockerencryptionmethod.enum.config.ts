import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { BitLockerEncryptionMethod } from './bitlockerencryptionmethod.enum';
//#endregion

export const BitLockerEncryptionMethodConfig = {
  name: "bitLockerEncryptionMethod",
  members: BitLockerEncryptionMethod
} as EnumConfig<BitLockerEncryptionMethod>;