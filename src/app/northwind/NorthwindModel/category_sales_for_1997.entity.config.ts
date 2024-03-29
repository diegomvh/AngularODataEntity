﻿//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CategorySalesFor1997 } from './category_sales_for_1997.entity';
import { CategorySalesFor1997Model } from './category_sales_for_1997.model';
import { CategorySalesFor1997Collection } from './category_sales_for_1997.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CategorySalesFor1997EntityConfig = {
  name: 'Category_Sales_for_1997',
  model: CategorySalesFor1997Model,
  collection: CategorySalesFor1997Collection,
  keys: [{name: 'CategoryName'}],
  fields: {
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15},
    CategorySales: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<CategorySalesFor1997>;
//#endregion