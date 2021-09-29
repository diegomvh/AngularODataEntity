//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductsByCategoriesService } from './products_by_categories.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ProductsByCategoriesServiceEntitySetConfig = {
  name: "Products_by_Categories",
  entityType: "NorthwindModel.Products_by_Category",
  service: ProductsByCategoriesService
} as EntitySetConfig;
//#endregion