import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceGeoLocation {
  //#region ODataApi Properties
  altitude: number;
  heading: number;
  horizontalAccuracy: number;
  lastCollectedDateTime: Date;
  latitude: number;
  longitude: number;
  speed: number;
  verticalAccuracy: number;
  //#endregion
}