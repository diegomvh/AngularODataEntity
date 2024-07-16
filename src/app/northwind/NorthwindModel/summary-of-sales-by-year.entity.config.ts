//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SummaryOfSalesByYear } from './summary-of-sales-by-year.entity';
import { SummaryOfSalesByYearModel } from './summary-of-sales-by-year.model';
import { SummaryOfSalesByYearCollection } from './summary-of-sales-by-year.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SummaryOfSalesByYearEntityConfig = {
  name: 'Summary_of_Sales_by_Year',
  model: SummaryOfSalesByYearModel,
  collection: SummaryOfSalesByYearCollection,
  keys: [{name: 'OrderID'}],
  fields: {
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    OrderID: {type: 'Edm.Int32', nullable: false},
    Subtotal: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<SummaryOfSalesByYear>;
//#endregion