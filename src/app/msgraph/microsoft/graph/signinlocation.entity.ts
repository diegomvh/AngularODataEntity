import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { GeoCoordinates } from './geocoordinates.entity';
import { GeoCoordinatesModel } from './geocoordinates.model';
import { GeoCoordinatesCollection } from './geocoordinates.collection';
//#endregion

export interface SignInLocation {
  //#region ODataApi Properties
  city?: string;
  countryOrRegion?: string;
  geoCoordinates?: GeoCoordinates;
  state?: string;
  //#endregion
}