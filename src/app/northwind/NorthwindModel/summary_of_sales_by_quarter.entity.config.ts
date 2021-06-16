//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { SummaryOfSalesByQuarter } from './summary_of_sales_by_quarter.entity';
import { SummaryOfSalesByQuarterModel } from './summary_of_sales_by_quarter.model';
import { SummaryOfSalesByQuarterCollection } from './summary_of_sales_by_quarter.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const SummaryOfSalesByQuarterEntityConfig = {
  name: "Summary_of_Sales_by_Quarter",
  model: SummaryOfSalesByQuarterModel,
  collection: SummaryOfSalesByQuarterCollection,
  keys: [{name: 'OrderID'}],
  fields: {
    ShippedDate: {type: 'Edm.DateTimeOffset'},
    OrderID: {type: 'Edm.Int32', nullable: false},
    Subtotal: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<SummaryOfSalesByQuarter>;
//#endregion