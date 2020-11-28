import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PhysicalAddress {
  //#region ODataApi Properties
  city?: string;
  countryOrRegion?: string;
  postalCode?: string;
  state?: string;
  street?: string;
  //#endregion
}