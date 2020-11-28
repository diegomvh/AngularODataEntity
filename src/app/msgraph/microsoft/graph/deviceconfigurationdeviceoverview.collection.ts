import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceConfigurationDeviceOverview } from './deviceconfigurationdeviceoverview.entity';
import { DeviceConfigurationDeviceOverviewModel } from './deviceconfigurationdeviceoverview.model';
//#endregion

export class DeviceConfigurationDeviceOverviewCollection<E extends DeviceConfigurationDeviceOverview, M extends DeviceConfigurationDeviceOverviewModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}