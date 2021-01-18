import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { SummaryOfSalesByYearsService } from './summary_of_sales_by_years.service';
//#endregion

//#region ODataApi EntitySetConfig
export const SummaryOfSalesByYearsServiceEntitySetConfig = {
  name: "Summary_of_Sales_by_Years",
  entityType: "NorthwindModel.Summary_of_Sales_by_Year",
  service: SummaryOfSalesByYearsService,
  annotations: []
} as EntitySetConfig;
//#endregion