import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrdersService } from './orders.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrdersConfig = {
  name: "Orders",
  entityType: "NorthwindModel.Order",
  service: OrdersService,
  annotations: []
} as EntitySetConfig;
//#endregion