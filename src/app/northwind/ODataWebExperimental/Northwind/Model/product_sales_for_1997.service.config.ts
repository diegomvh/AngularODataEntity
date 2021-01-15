import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductSalesFor1997Service } from './product_sales_for_1997.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ProductSalesFor1997Config = {
  name: "Product_Sales_for_1997",
  entityType: "NorthwindModel.Product_Sales_for_1997",
  service: ProductSalesFor1997Service,
  annotations: []
} as EntitySetConfig;
//#endregion