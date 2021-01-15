import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategorySalesFor1997 } from './category_sales_for_1997.entity';
import { CategorySalesFor1997Model } from './category_sales_for_1997.model';
import { CategorySalesFor1997Collection } from './category_sales_for_1997.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const CategorySalesFor1997Config = {
  name: "Category_Sales_for_1997",
  model: CategorySalesFor1997Model,
  collection: CategorySalesFor1997Collection,
  annotations: [],
  fields: {
    CategoryName: {type: 'Edm.String', key: true, ref: 'CategoryName', nullable: false, maxLength: 15},
    CategorySales: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<CategorySalesFor1997>;
//#endregion