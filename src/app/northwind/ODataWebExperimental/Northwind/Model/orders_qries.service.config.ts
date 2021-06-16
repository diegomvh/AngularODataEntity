//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { OrdersQriesService } from './orders_qries.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrdersQriesServiceEntitySetConfig = {
  name: "Orders_Qries",
  entityType: "NorthwindModel.Orders_Qry",
  service: OrdersQriesService
} as EntitySetConfig;
//#endregion