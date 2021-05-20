import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { InvoicesService } from './invoices.service';
//#endregion

//#region ODataApi EntitySetConfig
export const InvoicesServiceEntitySetConfig = {
  name: "Invoices",
  entityType: "NorthwindModel.Invoice",
  service: InvoicesService
} as EntitySetConfig;
//#endregion