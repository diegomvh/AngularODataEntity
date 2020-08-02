import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CategorySalesFor1997 } from './category_sales_for_1997.entity';
//#endregion

export const CategorySalesFor1997Config = {
  name: "CategorySalesFor1997",
  annotations: [],
  fields: {
    CategoryName: {type: 'Edm.String', key: true, ref: 'CategoryName', nullable: false, maxLength: 15},
    CategorySales: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<CategorySalesFor1997>;