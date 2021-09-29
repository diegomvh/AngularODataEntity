//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { RegionsService } from './regions.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const RegionsServiceEntitySetConfig = {
  name: "Regions",
  entityType: "NorthwindModel.Region",
  service: RegionsService
} as EntitySetConfig;
//#endregion