import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SalesByCategory } from './sales_by_category.entity';
import { SalesByCategoryModel } from './sales_by_category.model';
import { SalesByCategoryCollection } from './sales_by_category.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const SalesByCategoryEntityConfig = {
  name: "Sales_by_Category",
  model: SalesByCategoryModel,
  collection: SalesByCategoryCollection,
  keys: [{ref: 'CategoryID'},{ref: 'CategoryName'},{ref: 'ProductName'}],
  fields: {
    CategoryID: {type: 'Edm.Int32', nullable: false},
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ProductSales: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<SalesByCategory>;
//#endregion