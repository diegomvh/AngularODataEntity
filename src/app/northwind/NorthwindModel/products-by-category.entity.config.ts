//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductsByCategory } from './products-by-category.entity';
import { ProductsByCategoryModel } from './products-by-category.model';
import { ProductsByCategoryCollection } from './products-by-category.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProductsByCategoryEntityConfig = {
  name: 'Products_by_Category',
  model: ProductsByCategoryModel,
  collection: ProductsByCategoryCollection,
  keys: [{name: 'CategoryName'},{name: 'Discontinued'},{name: 'ProductName'}],
  fields: {
    CategoryName: {type: 'Edm.String', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false},
    QuantityPerUnit: {type: 'Edm.String'},
    UnitsInStock: {type: 'Edm.Int16'},
    Discontinued: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig;
//#endregion