import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsAboveAveragePricesService } from './products_above_average_prices.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ProductsAboveAveragePricesServiceEntitySetConfig = {
  name: "Products_Above_Average_Prices",
  entityType: "NorthwindModel.Products_Above_Average_Price",
  service: ProductsAboveAveragePricesService,
  annotations: []
} as EntitySetConfig;
//#endregion