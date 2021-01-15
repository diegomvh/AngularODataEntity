import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsService } from './products.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ProductsConfig = {
  name: "Products",
  entityType: "NorthwindModel.Product",
  service: ProductsService,
  annotations: []
} as EntitySetConfig;
//#endregion