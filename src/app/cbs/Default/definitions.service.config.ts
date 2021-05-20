import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefinitionsService } from './definitions.service';
//#endregion

//#region ODataApi EntitySetConfig
export const DefinitionsServiceEntitySetConfig = {
  name: "Definitions",
  entityType: "CBS.Website.ODataApi.Models.Definition",
  service: DefinitionsService
} as EntitySetConfig;
//#endregion