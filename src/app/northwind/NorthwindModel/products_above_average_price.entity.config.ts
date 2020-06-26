import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Products_Above_Average_Price } from './products_above_average_price.entity';
//#endregion

export const Products_Above_Average_PriceConfig = {
  name: "Products_Above_Average_Price",
  annotations: [],
  fields: {
    ProductName: {type: 'String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    UnitPrice: {type: 'Number', scale: 4}
  }
} as EntityConfig<Products_Above_Average_Price>;