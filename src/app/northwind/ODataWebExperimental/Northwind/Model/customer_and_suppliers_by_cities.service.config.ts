import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomerAndSuppliersByCitiesService } from './customer_and_suppliers_by_cities.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CustomerAndSuppliersByCitiesServiceEntitySetConfig = {
  name: "Customer_and_Suppliers_by_Cities",
  entityType: "NorthwindModel.Customer_and_Suppliers_by_City",
  service: CustomerAndSuppliersByCitiesService,
  annotations: []
} as EntitySetConfig;
//#endregion