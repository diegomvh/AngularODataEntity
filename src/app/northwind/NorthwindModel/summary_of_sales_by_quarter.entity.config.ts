import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SummaryOfSalesByQuarter } from './summary_of_sales_by_quarter.entity';
import { SummaryOfSalesByQuarterModel } from './summary_of_sales_by_quarter.model';
import { SummaryOfSalesByQuarterCollection } from './summary_of_sales_by_quarter.collection';
//#endregion

export const SummaryOfSalesByQuarterConfig = {
  name: "SummaryOfSalesByQuarter",
  model: SummaryOfSalesByQuarterModel,
  collection: SummaryOfSalesByQuarterCollection,
  annotations: [],
  fields: {
    shippedDate: {name: 'ShippedDate', type: 'Edm.DateTimeOffset'},
    orderID: {name: 'OrderID', type: 'Edm.Int32', key: true, ref: 'orderID', nullable: false},
    subtotal: {name: 'Subtotal', type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<SummaryOfSalesByQuarter>;