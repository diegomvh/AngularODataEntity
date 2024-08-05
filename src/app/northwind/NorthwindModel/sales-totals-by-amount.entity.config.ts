//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SalesTotalsByAmount } from './sales-totals-by-amount.entity';
import { SalesTotalsByAmountModel } from './sales-totals-by-amount.model';
import { SalesTotalsByAmountCollection } from './sales-totals-by-amount.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SalesTotalsByAmountEntityConfig = {
  name: 'Sales_Totals_by_Amount',
  model: SalesTotalsByAmountModel,
  collection: SalesTotalsByAmountCollection,
  keys: [{name: 'CompanyName'},{name: 'OrderID'}],
  fields: {
    SaleAmount: {type: 'Edm.Decimal'},
    OrderID: {type: 'Edm.Int32', nullable: false},
    CompanyName: {type: 'Edm.String', nullable: false},
    ShippedDate: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig;
//#endregion