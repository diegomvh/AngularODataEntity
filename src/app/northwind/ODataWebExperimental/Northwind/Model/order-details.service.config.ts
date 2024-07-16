//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrderDetailsService } from './order-details.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const OrderDetailsServiceEntitySetConfig = {
  name: 'Order_Details',
  entityType: 'NorthwindModel.Order_Detail',
  service: OrderDetailsService
} as EntitySetConfig;
//#endregion