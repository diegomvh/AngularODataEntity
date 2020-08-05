import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngineType } from './edgesearchenginetype.enum';
//#endregion

export const EdgeSearchEngineTypeConfig = {
  name: "EdgeSearchEngineType",
  members: EdgeSearchEngineType
} as EnumConfig<EdgeSearchEngineType>;