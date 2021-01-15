import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { SuppliersService } from './suppliers.service';
//#endregion

//#region ODataApi EntitySetConfig
export const SuppliersConfig = {
  name: "Suppliers",
  entityType: "ODataDemo.Supplier",
  service: SuppliersService,
  annotations: []
} as EntitySetConfig;
//#endregion