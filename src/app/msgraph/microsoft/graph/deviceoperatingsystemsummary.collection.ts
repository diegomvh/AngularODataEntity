import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.complex';
import { DeviceOperatingSystemSummaryModel } from './deviceoperatingsystemsummary.model';
//#endregion

export class DeviceOperatingSystemSummaryCollection<E extends DeviceOperatingSystemSummary, M extends DeviceOperatingSystemSummaryModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}