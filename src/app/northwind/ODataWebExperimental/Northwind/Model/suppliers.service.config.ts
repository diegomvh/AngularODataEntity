import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { SuppliersService } from './suppliers.service';
//#endregion

//#region ODataApi EntitySetConfig
export const SuppliersServiceEntitySetConfig = {
  name: "Suppliers",
  entityType: "NorthwindModel.Supplier",
  service: SuppliersService,
  annotations: []
} as EntitySetConfig;
//#endregion