import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrdersQriesService } from './orders_qries.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrdersQriesServiceEntitySetConfig = {
  name: "Orders_Qries",
  entityType: "NorthwindModel.Orders_Qry",
  service: OrdersQriesService,
  annotations: []
} as EntitySetConfig;
//#endregion