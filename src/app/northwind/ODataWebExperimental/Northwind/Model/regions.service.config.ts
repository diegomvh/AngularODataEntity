import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { RegionsService } from './regions.service';
//#endregion

//#region ODataApi EntitySetConfig
export const RegionsServiceEntitySetConfig = {
  name: "Regions",
  entityType: "NorthwindModel.Region",
  service: RegionsService,
  annotations: []
} as EntitySetConfig;
//#endregion