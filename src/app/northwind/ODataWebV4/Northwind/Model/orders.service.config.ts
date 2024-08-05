//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrdersService } from './orders.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const OrdersServiceEntitySetConfig = {
  name: 'Orders',
  entityType: 'NorthwindModel.Order',
  service: OrdersService
} as EntitySetConfig;
//#endregion