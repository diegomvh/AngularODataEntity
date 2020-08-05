import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PhysicalAddress {
  //#region ODataApi Properties
  street?: string;
  city?: string;
  state?: string;
  countryOrRegion?: string;
  postalCode?: string;
  //#endregion
}