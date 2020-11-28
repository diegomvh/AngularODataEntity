import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsAboveAveragePrice } from './products_above_average_price.entity';
import { ProductsAboveAveragePriceModel } from './products_above_average_price.model';
import { ProductsAboveAveragePriceCollection } from './products_above_average_price.collection';
//#endregion

export const ProductsAboveAveragePriceConfig = {
  name: "Products_Above_Average_Price",
  model: ProductsAboveAveragePriceModel,
  collection: ProductsAboveAveragePriceCollection,
  annotations: [],
  fields: {
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    UnitPrice: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<ProductsAboveAveragePrice>;