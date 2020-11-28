import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceConfigurationDeviceStateSummary } from './deviceconfigurationdevicestatesummary.entity';
import { DeviceConfigurationDeviceStateSummaryModel } from './deviceconfigurationdevicestatesummary.model';
//#endregion

export class DeviceConfigurationDeviceStateSummaryCollection<E extends DeviceConfigurationDeviceStateSummary, M extends DeviceConfigurationDeviceStateSummaryModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}