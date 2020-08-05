import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
import { DeviceGeoLocation } from './devicegeolocation.entity';
//#endregion

export interface LocateDeviceActionResult extends DeviceActionResult {
  //#region ODataApi Properties
  deviceLocation?: DeviceGeoLocation;
  //#endregion
}