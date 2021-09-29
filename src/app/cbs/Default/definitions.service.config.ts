//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { DefinitionsService } from './definitions.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const DefinitionsServiceEntitySetConfig = {
  name: "Definitions",
  entityType: "CBS.Website.ODataApi.Models.Definition",
  service: DefinitionsService
} as EntitySetConfig;
//#endregion