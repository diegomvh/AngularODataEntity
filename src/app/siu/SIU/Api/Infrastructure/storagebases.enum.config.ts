import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { StorageBases } from './storagebases.enum';
//#endregion

export const StorageBasesConfig = {
  name: "StorageBases",
  members: StorageBases
} as EnumConfig<StorageBases>;