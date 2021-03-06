﻿//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { OrderDetailsExtendedsService } from './order_details_extendeds.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrderDetailsExtendedsServiceEntitySetConfig = {
  name: "Order_Details_Extendeds",
  entityType: "NorthwindModel.Order_Details_Extended",
  service: OrderDetailsExtendedsService
} as EntitySetConfig;
//#endregion