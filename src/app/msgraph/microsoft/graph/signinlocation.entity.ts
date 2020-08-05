import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { GeoCoordinates } from './geocoordinates.entity';
//#endregion

export interface SignInLocation {
  //#region ODataApi Properties
  city?: string;
  state?: string;
  countryOrRegion?: string;
  geoCoordinates?: GeoCoordinates;
  //#endregion
}