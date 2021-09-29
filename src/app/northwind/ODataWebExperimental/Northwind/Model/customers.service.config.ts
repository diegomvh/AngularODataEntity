//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomersService } from './customers.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const CustomersServiceEntitySetConfig = {
  name: "Customers",
  entityType: "NorthwindModel.Customer",
  service: CustomersService
} as EntitySetConfig;
//#endregion