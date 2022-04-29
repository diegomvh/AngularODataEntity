//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { TerritoriesService } from './territories.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const TerritoriesServiceEntitySetConfig = {
  name: 'Territories',
  entityType: 'NorthwindModel.Territory',
  service: TerritoriesService
} as EntitySetConfig;
//#endregion