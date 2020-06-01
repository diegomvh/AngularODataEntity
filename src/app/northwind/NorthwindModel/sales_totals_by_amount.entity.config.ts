import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Sales_Totals_by_Amount } from './sales_totals_by_amount.entity';
//#endregion

export const Sales_Totals_by_AmountConfig = {
  name: "Sales_Totals_by_Amount",
  annotations: [],
  fields: {
    SaleAmount: {type: 'number'},
    OrderID: {type: 'number', key: true, ref: 'OrderID', nullable: false},
    CompanyName: {type: 'string', key: true, ref: 'CompanyName', nullable: false, maxLength: 40},
    ShippedDate: {type: 'Date'}
  }
} as EntityConfig<Sales_Totals_by_Amount>;