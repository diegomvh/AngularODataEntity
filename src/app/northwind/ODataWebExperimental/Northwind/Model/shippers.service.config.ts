//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { ShippersService } from './shippers.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ShippersServiceEntitySetConfig = {
  name: "Shippers",
  entityType: "NorthwindModel.Shipper",
  service: ShippersService
} as EntitySetConfig;
//#endregion