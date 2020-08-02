import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SalesTotalsByAmount } from './sales_totals_by_amount.entity';
//#endregion

export const SalesTotalsByAmountConfig = {
  name: "SalesTotalsByAmount",
  annotations: [],
  fields: {
    SaleAmount: {type: 'Edm.Decimal', precition: 19, scale: 4},
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    CompanyName: {type: 'Edm.String', key: true, ref: 'CompanyName', nullable: false, maxLength: 40},
    ShippedDate: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<SalesTotalsByAmount>;