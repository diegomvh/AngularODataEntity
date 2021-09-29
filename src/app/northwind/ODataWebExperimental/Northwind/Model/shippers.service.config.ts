//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ShippersService } from './shippers.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const ShippersServiceEntitySetConfig = {
  name: "Shippers",
  entityType: "NorthwindModel.Shipper",
  service: ShippersService
} as EntitySetConfig;
//#endregion