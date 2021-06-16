//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CategoriesService } from './categories.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CategoriesServiceEntitySetConfig = {
  name: "Categories",
  entityType: "ODataDemo.Category",
  service: CategoriesService
} as EntitySetConfig;
//#endregion