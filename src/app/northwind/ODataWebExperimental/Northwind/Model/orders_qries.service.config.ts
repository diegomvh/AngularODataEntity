//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrdersQriesService } from './orders_qries.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const OrdersQriesServiceEntitySetConfig = {
  name: 'Orders_Qries',
  entityType: 'NorthwindModel.Orders_Qry',
  service: OrdersQriesService
} as EntitySetConfig;
//#endregion