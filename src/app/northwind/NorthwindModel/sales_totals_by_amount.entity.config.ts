//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { SalesTotalsByAmount } from './sales_totals_by_amount.entity';
import { SalesTotalsByAmountModel } from './sales_totals_by_amount.model';
import { SalesTotalsByAmountCollection } from './sales_totals_by_amount.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const SalesTotalsByAmountEntityConfig = {
  name: "Sales_Totals_by_Amount",
  model: SalesTotalsByAmountModel,
  collection: SalesTotalsByAmountCollection,
  keys: [{name: 'CompanyName'},{name: 'OrderID'}],
  fields: {
    SaleAmount: {type: 'Edm.Decimal', precition: 19, scale: 4},
    OrderID: {type: 'Edm.Int32', nullable: false},
    CompanyName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ShippedDate: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<SalesTotalsByAmount>;
//#endregion