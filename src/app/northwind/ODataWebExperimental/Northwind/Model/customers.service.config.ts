//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CustomersService } from './customers.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CustomersServiceEntitySetConfig = {
  name: "Customers",
  entityType: "NorthwindModel.Customer",
  service: CustomersService
} as EntitySetConfig;
//#endregion