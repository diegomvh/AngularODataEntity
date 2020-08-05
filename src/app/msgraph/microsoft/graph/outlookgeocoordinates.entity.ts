import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface OutlookGeoCoordinates {
  //#region ODataApi Properties
  latitude?: number;
  longitude?: number;
  accuracy?: number;
  altitude?: number;
  altitudeAccuracy?: number;
  //#endregion
}