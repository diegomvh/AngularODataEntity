//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { GeslachtService } from './geslacht.service';
//#endregion

//#region ODataApi EntitySetConfig
export const GeslachtServiceEntitySetConfig = {
  name: "Geslacht",
  entityType: "Cbs.OData.Category",
  service: GeslachtService
} as EntitySetConfig;
//#endregion