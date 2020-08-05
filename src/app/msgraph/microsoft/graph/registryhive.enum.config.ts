import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RegistryHive } from './registryhive.enum';
//#endregion

export const RegistryHiveConfig = {
  name: "RegistryHive",
  members: RegistryHive
} as EnumConfig<RegistryHive>;