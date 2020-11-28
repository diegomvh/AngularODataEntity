import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.entity';
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.entity';
import { ManagedDeviceOverview } from './manageddeviceoverview.entity';
import { DeviceExchangeAccessStateSummaryModel } from './deviceexchangeaccessstatesummary.model';
import { DeviceOperatingSystemSummaryModel } from './deviceoperatingsystemsummary.model';
import { ManagedDeviceOverviewModel } from './manageddeviceoverview.model';
import { DeviceExchangeAccessStateSummaryCollection } from './deviceexchangeaccessstatesummary.collection';
import { DeviceOperatingSystemSummaryCollection } from './deviceoperatingsystemsummary.collection';
//#endregion

export class ManagedDeviceOverviewCollection<E extends ManagedDeviceOverview, M extends ManagedDeviceOverviewModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}