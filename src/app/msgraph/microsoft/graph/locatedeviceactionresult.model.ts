import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeviceGeoLocation } from './devicegeolocation.entity';
import { LocateDeviceActionResult } from './locatedeviceactionresult.entity';
import { DeviceGeoLocationModel } from './devicegeolocation.model';
import { DeviceGeoLocationCollection } from './devicegeolocation.collection';
import { LocateDeviceActionResultCollection } from './locatedeviceactionresult.collection';
//#endregion

export class LocateDeviceActionResultModel<E extends LocateDeviceActionResult> extends DeviceActionResultModel<E> {
  //#region ODataApi Properties
  deviceLocation?: DeviceGeoLocationModel<DeviceGeoLocation>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}