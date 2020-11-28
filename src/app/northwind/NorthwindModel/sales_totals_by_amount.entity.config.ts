import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SalesTotalsByAmount } from './sales_totals_by_amount.entity';
import { SalesTotalsByAmountModel } from './sales_totals_by_amount.model';
import { SalesTotalsByAmountCollection } from './sales_totals_by_amount.collection';
//#endregion

export const SalesTotalsByAmountConfig = {
  name: "Sales_Totals_by_Amount",
  model: SalesTotalsByAmountModel,
  collection: SalesTotalsByAmountCollection,
  annotations: [],
  fields: {
    SaleAmount: {type: 'Edm.Decimal', precition: 19, scale: 4},
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    CompanyName: {type: 'Edm.String', key: true, ref: 'CompanyName', nullable: false, maxLength: 40},
    ShippedDate: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<SalesTotalsByAmount>;