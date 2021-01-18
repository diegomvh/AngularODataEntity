import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderSubtotalsService } from './order_subtotals.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrderSubtotalsServiceEntitySetConfig = {
  name: "Order_Subtotals",
  entityType: "NorthwindModel.Order_Subtotal",
  service: OrderSubtotalsService,
  annotations: []
} as EntitySetConfig;
//#endregion