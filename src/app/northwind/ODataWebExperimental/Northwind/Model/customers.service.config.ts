import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomersService } from './customers.service';
//#endregion

//#region ODataApi EntitySetConfig
export const CustomersConfig = {
  name: "Customers",
  entityType: "NorthwindModel.Customer",
  service: CustomersService,
  annotations: []
} as EntitySetConfig;
//#endregion