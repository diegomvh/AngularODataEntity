import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Products_Above_Average_Price } from './products_above_average_price.entity';
//#endregion

export const Products_Above_Average_PriceConfig = {
  name: "Products_Above_Average_Price",
  annotations: [],
  fields: {
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    UnitPrice: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<Products_Above_Average_Price>;