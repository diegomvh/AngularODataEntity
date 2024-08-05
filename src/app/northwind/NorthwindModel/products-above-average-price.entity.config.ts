//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductsAboveAveragePrice } from './products-above-average-price.entity';
import { ProductsAboveAveragePriceModel } from './products-above-average-price.model';
import { ProductsAboveAveragePriceCollection } from './products-above-average-price.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProductsAboveAveragePriceEntityConfig = {
  name: 'Products_Above_Average_Price',
  model: ProductsAboveAveragePriceModel,
  collection: ProductsAboveAveragePriceCollection,
  keys: [{name: 'ProductName'}],
  fields: {
    ProductName: {type: 'Edm.String', nullable: false},
    UnitPrice: {type: 'Edm.Decimal'}
  }
} as StructuredTypeConfig;
//#endregion