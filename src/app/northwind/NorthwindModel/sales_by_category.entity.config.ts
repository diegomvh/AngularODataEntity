import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SalesByCategory } from './sales_by_category.entity';
import { SalesByCategoryModel } from './sales_by_category.model';
import { SalesByCategoryCollection } from './sales_by_category.collection';
//#endregion

export const SalesByCategoryConfig = {
  name: "SalesByCategory",
  model: SalesByCategoryModel,
  collection: SalesByCategoryCollection,
  annotations: [],
  fields: {
    categoryID: {name: 'CategoryID', type: 'Edm.Int32', key: true, ref: 'categoryID', nullable: false},
    categoryName: {name: 'CategoryName', type: 'Edm.String', key: true, ref: 'categoryName', nullable: false, maxLength: 15},
    productName: {name: 'ProductName', type: 'Edm.String', key: true, ref: 'productName', nullable: false, maxLength: 40},
    productSales: {name: 'ProductSales', type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<SalesByCategory>;