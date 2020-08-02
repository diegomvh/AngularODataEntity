import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsAboveAveragePrice } from './products_above_average_price.entity';
import { ProductsAboveAveragePriceModel } from './products_above_average_price.model';
import { ProductsAboveAveragePriceCollection } from './products_above_average_price.collection';
//#endregion

export const ProductsAboveAveragePriceConfig = {
  name: "ProductsAboveAveragePrice",
  model: ProductsAboveAveragePriceModel,
  collection: ProductsAboveAveragePriceCollection,
  annotations: [],
  fields: {
    productName: {name: 'ProductName', type: 'Edm.String', key: true, ref: 'productName', nullable: false, maxLength: 40},
    unitPrice: {name: 'UnitPrice', type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<ProductsAboveAveragePrice>;