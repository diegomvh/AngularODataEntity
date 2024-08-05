//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CategorySalesFor1997 } from './category-sales-for-1997.entity';
import { CategorySalesFor1997Model } from './category-sales-for-1997.model';
import { CategorySalesFor1997Collection } from './category-sales-for-1997.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CategorySalesFor1997EntityConfig = {
  name: 'Category_Sales_for_1997',
  model: CategorySalesFor1997Model,
  collection: CategorySalesFor1997Collection,
  keys: [{name: 'CategoryName'}],
  fields: {
    CategoryName: {type: 'Edm.String', nullable: false},
    CategorySales: {type: 'Edm.Decimal'}
  }
} as StructuredTypeConfig;
//#endregion