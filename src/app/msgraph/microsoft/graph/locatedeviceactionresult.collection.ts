import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceActionResultCollection } from './deviceactionresult.collection';
import { DeviceGeoLocation } from './devicegeolocation.entity';
import { LocateDeviceActionResult } from './locatedeviceactionresult.entity';
import { DeviceGeoLocationModel } from './devicegeolocation.model';
import { LocateDeviceActionResultModel } from './locatedeviceactionresult.model';
import { DeviceGeoLocationCollection } from './devicegeolocation.collection';
//#endregion

export class LocateDeviceActionResultCollection<E extends LocateDeviceActionResult, M extends LocateDeviceActionResultModel<E>> extends DeviceActionResultCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}