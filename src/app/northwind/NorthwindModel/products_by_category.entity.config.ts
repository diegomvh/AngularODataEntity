import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsByCategory } from './products_by_category.entity';
import { ProductsByCategoryModel } from './products_by_category.model';
import { ProductsByCategoryCollection } from './products_by_category.collection';
//#endregion

export const ProductsByCategoryConfig = {
  name: "ProductsByCategory",
  model: ProductsByCategoryModel,
  collection: ProductsByCategoryCollection,
  annotations: [],
  fields: {
    categoryName: {name: 'CategoryName', type: 'Edm.String', key: true, ref: 'categoryName', nullable: false, maxLength: 15},
    productName: {name: 'ProductName', type: 'Edm.String', key: true, ref: 'productName', nullable: false, maxLength: 40},
    quantityPerUnit: {name: 'QuantityPerUnit', type: 'Edm.String', maxLength: 20},
    unitsInStock: {name: 'UnitsInStock', type: 'Edm.Int16'},
    discontinued: {name: 'Discontinued', type: 'Edm.Boolean', key: true, ref: 'discontinued', nullable: false}
  }
} as EntityConfig<ProductsByCategory>;