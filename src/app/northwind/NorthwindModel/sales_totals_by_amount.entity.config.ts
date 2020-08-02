import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SalesTotalsByAmount } from './sales_totals_by_amount.entity';
import { SalesTotalsByAmountModel } from './sales_totals_by_amount.model';
import { SalesTotalsByAmountCollection } from './sales_totals_by_amount.collection';
//#endregion

export const SalesTotalsByAmountConfig = {
  name: "SalesTotalsByAmount",
  model: SalesTotalsByAmountModel,
  collection: SalesTotalsByAmountCollection,
  annotations: [],
  fields: {
    saleAmount: {name: 'SaleAmount', type: 'Edm.Decimal', precition: 19, scale: 4},
    orderID: {name: 'OrderID', type: 'Edm.Int32', key: true, ref: 'orderID', nullable: false},
    companyName: {name: 'CompanyName', type: 'Edm.String', key: true, ref: 'companyName', nullable: false, maxLength: 40},
    shippedDate: {name: 'ShippedDate', type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<SalesTotalsByAmount>;