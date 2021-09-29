//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { GeslachtService } from './geslacht.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const GeslachtServiceEntitySetConfig = {
  name: "Geslacht",
  entityType: "Cbs.OData.Category",
  service: GeslachtService
} as EntitySetConfig;
//#endregion