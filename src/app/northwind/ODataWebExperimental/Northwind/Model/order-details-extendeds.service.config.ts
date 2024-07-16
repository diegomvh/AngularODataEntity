//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrderDetailsExtendedsService } from './order-details-extendeds.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const OrderDetailsExtendedsServiceEntitySetConfig = {
  name: 'Order_Details_Extendeds',
  entityType: 'NorthwindModel.Order_Details_Extended',
  service: OrderDetailsExtendedsService
} as EntitySetConfig;
//#endregion