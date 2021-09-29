//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { FlashService } from './flash.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const FlashServiceEntitySetConfig = {
  name: "Flash",
  entityType: "CBS.Website.ODataApi.Models.Flash",
  service: FlashService
} as EntitySetConfig;
//#endregion