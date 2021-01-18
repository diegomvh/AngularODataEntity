import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { SalesTotalsByAmountsService } from './sales_totals_by_amounts.service';
//#endregion

//#region ODataApi EntitySetConfig
export const SalesTotalsByAmountsServiceEntitySetConfig = {
  name: "Sales_Totals_by_Amounts",
  entityType: "NorthwindModel.Sales_Totals_by_Amount",
  service: SalesTotalsByAmountsService,
  annotations: []
} as EntitySetConfig;
//#endregion