﻿//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { OrderSubtotalsService } from './order_subtotals.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrderSubtotalsServiceEntitySetConfig = {
  name: "Order_Subtotals",
  entityType: "NorthwindModel.Order_Subtotal",
  service: OrderSubtotalsService
} as EntitySetConfig;
//#endregion