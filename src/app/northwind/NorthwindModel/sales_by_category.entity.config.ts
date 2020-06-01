import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Sales_by_Category } from './sales_by_category.entity';
//#endregion

export const Sales_by_CategoryConfig = {
  name: "Sales_by_Category",
  annotations: [],
  fields: {
    CategoryID: {type: 'number', key: true, ref: 'CategoryID', nullable: false},
    CategoryName: {type: 'string', key: true, ref: 'CategoryName', nullable: false, maxLength: 15},
    ProductName: {type: 'string', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    ProductSales: {type: 'number'}
  }
} as EntityConfig<Sales_by_Category>;