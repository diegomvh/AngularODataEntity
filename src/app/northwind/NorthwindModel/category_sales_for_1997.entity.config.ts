import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategorySalesFor1997 } from './category_sales_for_1997.entity';
import { CategorySalesFor1997Model } from './category_sales_for_1997.model';
import { CategorySalesFor1997Collection } from './category_sales_for_1997.collection';
//#endregion

export const CategorySalesFor1997Config = {
  name: "CategorySalesFor1997",
  model: CategorySalesFor1997Model,
  collection: CategorySalesFor1997Collection,
  annotations: [],
  fields: {
    categoryName: {name: 'CategoryName', type: 'Edm.String', key: true, ref: 'categoryName', nullable: false, maxLength: 15},
    categorySales: {name: 'CategorySales', type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<CategorySalesFor1997>;