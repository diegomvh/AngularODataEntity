import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SummaryOfSalesByQuarter } from './summary_of_sales_by_quarter.entity';
import { SummaryOfSalesByQuarterModel } from './summary_of_sales_by_quarter.model';
import { SummaryOfSalesByQuarterCollection } from './summary_of_sales_by_quarter.collection';
//#endregion

export const SummaryOfSalesByQuarterConfig = {
  name: "Summary_of_Sales_by_Quarter",
  model: SummaryOfSalesByQuarterModel,
  collection: SummaryOfSalesByQuarterCollection,
  annotations: [],
  fields: {
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    Subtotal: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<SummaryOfSalesByQuarter>;