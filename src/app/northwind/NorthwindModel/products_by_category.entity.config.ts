﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductsByCategory } from './products_by_category.entity';
import { ProductsByCategoryModel } from './products_by_category.model';
import { ProductsByCategoryCollection } from './products_by_category.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProductsByCategoryEntityConfig = {
  name: 'Products_by_Category',
  model: ProductsByCategoryModel,
  collection: ProductsByCategoryCollection,
  keys: [{name: 'CategoryName'},{name: 'Discontinued'},{name: 'ProductName'}],
  fields: {
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40},
    QuantityPerUnit: {type: 'Edm.String', maxLength: 20},
    UnitsInStock: {type: 'Edm.Int16'},
    Discontinued: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<ProductsByCategory>;
//#endregion