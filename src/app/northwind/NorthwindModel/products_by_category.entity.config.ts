import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Products_by_Category } from './products_by_category.entity';
//#endregion

export const Products_by_CategoryConfig = {
  name: "Products_by_Category",
  annotations: [],
  fields: {
    CategoryName: {type: 'String', key: true, ref: 'CategoryName', nullable: false, maxLength: 15},
    ProductName: {type: 'String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    QuantityPerUnit: {type: 'String', maxLength: 20},
    UnitsInStock: {type: 'Number'},
    Discontinued: {type: 'Boolean', key: true, ref: 'Discontinued', nullable: false}
  }
} as EntityConfig<Products_by_Category>;