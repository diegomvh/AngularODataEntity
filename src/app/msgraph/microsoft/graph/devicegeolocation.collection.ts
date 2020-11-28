import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceGeoLocation } from './devicegeolocation.complex';
import { DeviceGeoLocationModel } from './devicegeolocation.model';
//#endregion

export class DeviceGeoLocationCollection<E extends DeviceGeoLocation, M extends DeviceGeoLocationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}