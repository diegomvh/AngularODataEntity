import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.complex';
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.complex';
import { DeviceExchangeAccessStateSummaryModel } from './deviceexchangeaccessstatesummary.model';
import { DeviceOperatingSystemSummaryModel } from './deviceoperatingsystemsummary.model';
import { EntityModel } from './entity.model';
import { DeviceExchangeAccessStateSummaryCollection } from './deviceexchangeaccessstatesummary.collection';
import { DeviceOperatingSystemSummaryCollection } from './deviceoperatingsystemsummary.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ManagedDeviceOverview extends Entity {
  //#region ODataApi Properties
  deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummary;
  deviceOperatingSystemSummary?: DeviceOperatingSystemSummary;
  dualEnrolledDeviceCount: number;
  enrolledDeviceCount: number;
  mdmEnrolledCount: number;
  //#endregion
}