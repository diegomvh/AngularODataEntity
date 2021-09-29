//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { InvoicesService } from './invoices.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const InvoicesServiceEntitySetConfig = {
  name: "Invoices",
  entityType: "NorthwindModel.Invoice",
  service: InvoicesService
} as EntitySetConfig;
//#endregion