import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RegistryHive } from './registryhive.enum';
//#endregion

export const RegistryHiveConfig = {
  name: "registryHive",
  members: RegistryHive
} as EnumTypeConfig<RegistryHive>;