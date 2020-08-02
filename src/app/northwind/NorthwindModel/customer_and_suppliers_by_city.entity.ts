import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface CustomerAndSuppliersByCity {
  //#region ODataApi Properties
  city?: string;
  companyName: string;
  contactName?: string;
  relationship: string;
  //#endregion
}