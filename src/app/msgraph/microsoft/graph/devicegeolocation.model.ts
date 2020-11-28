import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceGeoLocation } from './devicegeolocation.complex';
import { DeviceGeoLocationCollection } from './devicegeolocation.collection';
//#endregion

export class DeviceGeoLocationModel<E extends DeviceGeoLocation> extends ODataModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}