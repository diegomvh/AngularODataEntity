//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { SalesByCategoriesService } from './sales_by_categories.service';
//#endregion

//#region ODataApi EntitySetConfig
export const SalesByCategoriesServiceEntitySetConfig = {
  name: "Sales_by_Categories",
  entityType: "NorthwindModel.Sales_by_Category",
  service: SalesByCategoriesService
} as EntitySetConfig;
//#endregion