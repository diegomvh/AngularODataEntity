//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomerAndSuppliersByCitiesService } from './customer_and_suppliers_by_cities.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const CustomerAndSuppliersByCitiesServiceEntitySetConfig = {
  name: 'Customer_and_Suppliers_by_Cities',
  entityType: 'NorthwindModel.Customer_and_Suppliers_by_City',
  service: CustomerAndSuppliersByCitiesService
} as EntitySetConfig;
//#endregion