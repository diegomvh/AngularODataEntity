import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.complex';
import { DeviceExchangeAccessStateSummaryCollection } from './deviceexchangeaccessstatesummary.collection';
//#endregion

export class DeviceExchangeAccessStateSummaryModel<E extends DeviceExchangeAccessStateSummary> extends ODataModel<E> {
  //#region ODataApi Properties
  allowedDeviceCount: number;
  blockedDeviceCount: number;
  quarantinedDeviceCount: number;
  unavailableDeviceCount: number;
  unknownDeviceCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}