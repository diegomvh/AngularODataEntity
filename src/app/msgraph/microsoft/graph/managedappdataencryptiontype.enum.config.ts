import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppDataEncryptionType } from './managedappdataencryptiontype.enum';
//#endregion

export const ManagedAppDataEncryptionTypeConfig = {
  name: "managedAppDataEncryptionType",
  members: ManagedAppDataEncryptionType
} as EnumConfig<ManagedAppDataEncryptionType>;