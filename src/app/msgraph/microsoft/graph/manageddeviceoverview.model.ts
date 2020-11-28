import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.complex';
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.complex';
import { ManagedDeviceOverview } from './manageddeviceoverview.entity';
import { DeviceExchangeAccessStateSummaryModel } from './deviceexchangeaccessstatesummary.model';
import { DeviceOperatingSystemSummaryModel } from './deviceoperatingsystemsummary.model';
import { DeviceExchangeAccessStateSummaryCollection } from './deviceexchangeaccessstatesummary.collection';
import { DeviceOperatingSystemSummaryCollection } from './deviceoperatingsystemsummary.collection';
import { ManagedDeviceOverviewCollection } from './manageddeviceoverview.collection';
//#endregion

export class ManagedDeviceOverviewModel<E extends ManagedDeviceOverview> extends EntityModel<E> {
  //#region ODataApi Properties
  deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummaryModel<DeviceExchangeAccessStateSummary>;
  deviceOperatingSystemSummary?: DeviceOperatingSystemSummaryModel<DeviceOperatingSystemSummary>;
  dualEnrolledDeviceCount: number;
  enrolledDeviceCount: number;
  mdmEnrolledCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}