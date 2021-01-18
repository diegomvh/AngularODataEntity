import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderDetailsExtendedsService } from './order_details_extendeds.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrderDetailsExtendedsServiceEntitySetConfig = {
  name: "Order_Details_Extendeds",
  entityType: "NorthwindModel.Order_Details_Extended",
  service: OrderDetailsExtendedsService,
  annotations: []
} as EntitySetConfig;
//#endregion