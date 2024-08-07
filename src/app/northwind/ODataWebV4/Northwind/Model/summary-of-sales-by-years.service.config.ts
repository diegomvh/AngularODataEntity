﻿//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SummaryOfSalesByYearsService } from './summary-of-sales-by-years.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SummaryOfSalesByYearsServiceEntitySetConfig = {
  name: 'Summary_of_Sales_by_Years',
  entityType: 'NorthwindModel.Summary_of_Sales_by_Year',
  service: SummaryOfSalesByYearsService
} as EntitySetConfig;
//#endregion