import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RegistryValueType } from './registryvaluetype.enum';
//#endregion

export const RegistryValueTypeConfig = {
  name: "registryValueType",
  members: RegistryValueType
} as EnumConfig<RegistryValueType>;