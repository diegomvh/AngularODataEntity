//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductsAboveAveragePricesService } from './products-above-average-prices.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ProductsAboveAveragePricesServiceEntitySetConfig = {
  name: 'Products_Above_Average_Prices',
  entityType: 'NorthwindModel.Products_Above_Average_Price',
  service: ProductsAboveAveragePricesService
} as EntitySetConfig;
//#endregion