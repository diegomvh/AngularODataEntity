import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedAppDataStorageLocation } from './managedappdatastoragelocation.enum';
//#endregion

export const ManagedAppDataStorageLocationConfig = {
  name: "managedAppDataStorageLocation",
  members: ManagedAppDataStorageLocation
} as EnumConfig<ManagedAppDataStorageLocation>;