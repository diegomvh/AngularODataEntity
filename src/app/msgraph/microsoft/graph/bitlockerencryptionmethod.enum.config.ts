import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { BitLockerEncryptionMethod } from './bitlockerencryptionmethod.enum';
//#endregion

export const BitLockerEncryptionMethodConfig = {
  name: "BitLockerEncryptionMethod",
  members: BitLockerEncryptionMethod
} as EnumConfig<BitLockerEncryptionMethod>;