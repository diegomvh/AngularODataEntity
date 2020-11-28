import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceConfigurationDeviceOverview } from './deviceconfigurationdeviceoverview.entity';
import { DeviceConfigurationDeviceOverviewCollection } from './deviceconfigurationdeviceoverview.collection';
//#endregion

export class DeviceConfigurationDeviceOverviewModel<E extends DeviceConfigurationDeviceOverview> extends EntityModel<E> {
  //#region ODataApi Properties
  configurationVersion: number;
  errorCount: number;
  failedCount: number;
  lastUpdateDateTime: Date;
  notApplicableCount: number;
  pendingCount: number;
  successCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}