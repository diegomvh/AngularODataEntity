import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RegistryOperation } from './registryoperation.enum';
//#endregion

export const RegistryOperationConfig = {
  name: "registryOperation",
  members: RegistryOperation
} as EnumTypeConfig<RegistryOperation>;