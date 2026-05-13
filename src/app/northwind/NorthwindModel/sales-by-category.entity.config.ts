//#region ODataApiGen Imports
import { SalesByCategory } from './sales-by-category.entity';
import { SalesByCategoryModel } from './sales-by-category.model';
import { SalesByCategoryCollection } from './sales-by-category.collection';
//#endregion

//#region ODataApiGen ODataStrucutredTypeConfig
export const SalesByCategoryEntityConfig = {
  name: 'Sales_by_Category',
  model: SalesByCategoryModel,
  collection: SalesByCategoryCollection,
  keys: [{name: 'CategoryID'},{name: 'CategoryName'},{name: 'ProductName'}],
  fields: {
    CategoryID: {type: 'Edm.Int32', nullable: false},
    CategoryName: {type: 'Edm.String', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false},
    ProductSales: {type: 'Edm.Decimal'}
  }
};
//#endregion