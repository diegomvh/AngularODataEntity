import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsByCategoriesService } from './products_by_categories.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ProductsByCategoriesConfig = {
  name: "Products_by_Categories",
  entityType: "NorthwindModel.Products_by_Category",
  service: ProductsByCategoriesService,
  annotations: []
} as EntitySetConfig;
//#endregion