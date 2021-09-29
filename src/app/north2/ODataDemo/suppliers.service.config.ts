//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SuppliersService } from './suppliers.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const SuppliersServiceEntitySetConfig = {
  name: "Suppliers",
  entityType: "ODataDemo.Supplier",
  service: SuppliersService
} as EntitySetConfig;
//#endregion