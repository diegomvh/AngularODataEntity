//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SalesByCategoriesService } from './sales-by-categories.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SalesByCategoriesServiceEntitySetConfig = {
  name: 'Sales_by_Categories',
  entityType: 'NorthwindModel.Sales_by_Category',
  service: SalesByCategoriesService
} as EntitySetConfig;
//#endregion