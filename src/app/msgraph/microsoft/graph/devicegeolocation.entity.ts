import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceGeoLocation {
  //#region ODataApi Properties
  lastCollectedDateTime: Date;
  longitude: number;
  latitude: number;
  altitude: number;
  horizontalAccuracy: number;
  verticalAccuracy: number;
  heading: number;
  speed: number;
  //#endregion
}