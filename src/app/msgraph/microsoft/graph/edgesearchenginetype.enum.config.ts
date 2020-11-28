import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngineType } from './edgesearchenginetype.enum';
//#endregion

export const EdgeSearchEngineTypeConfig = {
  name: "edgeSearchEngineType",
  members: EdgeSearchEngineType
} as EnumTypeConfig<EdgeSearchEngineType>;