//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { SuppliersService } from './suppliers.service';
//#endregion

//#region ODataApi EntitySetConfig
export const SuppliersServiceEntitySetConfig = {
  name: "Suppliers",
  entityType: "NorthwindModel.Supplier",
  service: SuppliersService
} as EntitySetConfig;
//#endregion