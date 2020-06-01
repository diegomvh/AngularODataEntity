import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Category_Sales_for_1997 } from './category_sales_for_1997.entity';
//#endregion

export const Category_Sales_for_1997Config = {
  name: "Category_Sales_for_1997",
  annotations: [],
  fields: {
    CategoryName: {type: 'string', key: true, ref: 'CategoryName', nullable: false, maxLength: 15},
    CategorySales: {type: 'number'}
  }
} as EntityConfig<Category_Sales_for_1997>;