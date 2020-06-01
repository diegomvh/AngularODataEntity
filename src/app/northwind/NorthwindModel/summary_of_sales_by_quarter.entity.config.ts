import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Summary_of_Sales_by_Quarter } from './summary_of_sales_by_quarter.entity';
//#endregion

export const Summary_of_Sales_by_QuarterConfig = {
  name: "Summary_of_Sales_by_Quarter",
  annotations: [],
  fields: {
    ShippedDate: {type: 'Date'},
    OrderID: {type: 'number', key: true, ref: 'OrderID', nullable: false},
    Subtotal: {type: 'number'}
  }
} as EntityConfig<Summary_of_Sales_by_Quarter>;