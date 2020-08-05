import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RegistryOperation } from './registryoperation.enum';
//#endregion

export const RegistryOperationConfig = {
  name: "RegistryOperation",
  members: RegistryOperation
} as EnumConfig<RegistryOperation>;