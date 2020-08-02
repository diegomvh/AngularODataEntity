import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SummaryOfSalesByYear } from './summary_of_sales_by_year.entity';
import { SummaryOfSalesByYearModel } from './summary_of_sales_by_year.model';
import { SummaryOfSalesByYearCollection } from './summary_of_sales_by_year.collection';
//#endregion

export const SummaryOfSalesByYearConfig = {
  name: "SummaryOfSalesByYear",
  model: SummaryOfSalesByYearModel,
  collection: SummaryOfSalesByYearCollection,
  annotations: [],
  fields: {
    shippedDate: {name: 'ShippedDate', type: 'Edm.DateTimeOffset'},
    orderID: {name: 'OrderID', type: 'Edm.Int32', key: true, ref: 'orderID', nullable: false},
    subtotal: {name: 'Subtotal', type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<SummaryOfSalesByYear>;