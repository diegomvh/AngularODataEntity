import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { TerritoriesService } from './territories.service';
//#endregion

//#region ODataApi EntitySetConfig
export const TerritoriesConfig = {
  name: "Territories",
  entityType: "NorthwindModel.Territory",
  service: TerritoriesService,
  annotations: []
} as EntitySetConfig;
//#endregion