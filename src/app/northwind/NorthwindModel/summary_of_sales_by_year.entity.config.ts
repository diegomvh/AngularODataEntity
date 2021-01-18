import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SummaryOfSalesByYear } from './summary_of_sales_by_year.entity';
import { SummaryOfSalesByYearModel } from './summary_of_sales_by_year.model';
import { SummaryOfSalesByYearCollection } from './summary_of_sales_by_year.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const SummaryOfSalesByYearEntityConfig = {
  name: "Summary_of_Sales_by_Year",
  model: SummaryOfSalesByYearModel,
  collection: SummaryOfSalesByYearCollection,
  annotations: [],
  fields: {
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    OrderID: {type: 'Edm.Int32', key: true, ref: 'OrderID', nullable: false},
    Subtotal: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<SummaryOfSalesByYear>;
//#endregion