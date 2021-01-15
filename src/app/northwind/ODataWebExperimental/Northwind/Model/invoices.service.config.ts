import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { InvoicesService } from './invoices.service';
//#endregion

//#region ODataApi EntitySetConfig
export const InvoicesConfig = {
  name: "Invoices",
  entityType: "NorthwindModel.Invoice",
  service: InvoicesService,
  annotations: []
} as EntitySetConfig;
//#endregion