﻿import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { SummaryOfSalesByQuartersService } from './summary_of_sales_by_quarters.service';
//#endregion

//#region ODataApi EntitySetConfig
export const SummaryOfSalesByQuartersConfig = {
  name: "Summary_of_Sales_by_Quarters",
  entityType: "NorthwindModel.Summary_of_Sales_by_Quarter",
  service: SummaryOfSalesByQuartersService,
  annotations: []
} as EntitySetConfig;
//#endregion