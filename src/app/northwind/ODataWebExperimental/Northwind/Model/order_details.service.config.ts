import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderDetailsService } from './order_details.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrderDetailsConfig = {
  name: "Order_Details",
  entityType: "NorthwindModel.Order_Detail",
  service: OrderDetailsService,
  annotations: []
} as EntitySetConfig;
//#endregion