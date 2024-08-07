﻿//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SummaryOfSalesByQuartersService } from './summary-of-sales-by-quarters.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SummaryOfSalesByQuartersServiceEntitySetConfig = {
  name: 'Summary_of_Sales_by_Quarters',
  entityType: 'NorthwindModel.Summary_of_Sales_by_Quarter',
  service: SummaryOfSalesByQuartersService
} as EntitySetConfig;
//#endregion