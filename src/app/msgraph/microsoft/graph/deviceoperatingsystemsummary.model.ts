import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.complex';
import { DeviceOperatingSystemSummaryCollection } from './deviceoperatingsystemsummary.collection';
//#endregion

export class DeviceOperatingSystemSummaryModel<E extends DeviceOperatingSystemSummary> extends ODataModel<E> {
  //#region ODataApi Properties
  androidCount: number;
  iosCount: number;
  macOSCount: number;
  unknownCount: number;
  windowsCount: number;
  windowsMobileCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}