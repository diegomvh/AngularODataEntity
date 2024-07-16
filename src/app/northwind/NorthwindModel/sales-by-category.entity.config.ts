//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SalesByCategory } from './sales-by-category.entity';
import { SalesByCategoryModel } from './sales-by-category.model';
import { SalesByCategoryCollection } from './sales-by-category.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SalesByCategoryEntityConfig = {
  name: 'Sales_by_Category',
  model: SalesByCategoryModel,
  collection: SalesByCategoryCollection,
  keys: [{name: 'CategoryID'},{name: 'CategoryName'},{name: 'ProductName'}],
  fields: {
    CategoryID: {type: 'Edm.Int32', nullable: false},
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ProductSales: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<SalesByCategory>;
//#endregion