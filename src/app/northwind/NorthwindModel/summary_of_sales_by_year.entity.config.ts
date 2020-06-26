import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Summary_of_Sales_by_Year } from './summary_of_sales_by_year.entity';
//#endregion

export const Summary_of_Sales_by_YearConfig = {
  name: "Summary_of_Sales_by_Year",
  annotations: [],
  fields: {
    ShippedDate: {type: 'Date'},
    OrderID: {type: 'Number', key: true, ref: 'OrderID', nullable: false},
    Subtotal: {type: 'Number', scale: 4}
  }
} as EntityConfig<Summary_of_Sales_by_Year>;