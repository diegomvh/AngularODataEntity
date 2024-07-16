//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { OrderSubtotalsService } from './order-subtotals.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const OrderSubtotalsServiceEntitySetConfig = {
  name: 'Order_Subtotals',
  entityType: 'NorthwindModel.Order_Subtotal',
  service: OrderSubtotalsService
} as EntitySetConfig;
//#endregion