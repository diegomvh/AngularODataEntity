//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SummaryOfSalesByQuarter } from './summary-of-sales-by-quarter.entity';
import { SummaryOfSalesByQuarterModel } from './summary-of-sales-by-quarter.model';
import { SummaryOfSalesByQuarterCollection } from './summary-of-sales-by-quarter.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SummaryOfSalesByQuarterEntityConfig = {
  name: 'Summary_of_Sales_by_Quarter',
  model: SummaryOfSalesByQuarterModel,
  collection: SummaryOfSalesByQuarterCollection,
  keys: [{name: 'OrderID'}],
  fields: {
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    OrderID: {type: 'Edm.Int32', nullable: false},
    Subtotal: {type: 'Edm.Decimal'}
  }
} as StructuredTypeConfig;
//#endregion