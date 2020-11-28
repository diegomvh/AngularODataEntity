import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface PhysicalOfficeAddress {
  //#region ODataApi Properties
  city?: string;
  countryOrRegion?: string;
  officeLocation?: string;
  postalCode?: string;
  state?: string;
  street?: string;
  //#endregion
}