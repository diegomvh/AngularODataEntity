import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceConfigurationDeviceStateSummary } from './deviceconfigurationdevicestatesummary.entity';
import { DeviceConfigurationDeviceStateSummaryCollection } from './deviceconfigurationdevicestatesummary.collection';
//#endregion

export class DeviceConfigurationDeviceStateSummaryModel<E extends DeviceConfigurationDeviceStateSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  compliantDeviceCount: number;
  conflictDeviceCount: number;
  errorDeviceCount: number;
  nonCompliantDeviceCount: number;
  notApplicableDeviceCount: number;
  remediatedDeviceCount: number;
  unknownDeviceCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}