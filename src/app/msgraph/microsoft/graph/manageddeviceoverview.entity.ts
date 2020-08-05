import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceOperatingSystemSummary } from './deviceoperatingsystemsummary.entity';
import { DeviceExchangeAccessStateSummary } from './deviceexchangeaccessstatesummary.entity';
//#endregion

export interface ManagedDeviceOverview extends Entity {
  //#region ODataApi Properties
  enrolledDeviceCount: number;
  mdmEnrolledCount: number;
  dualEnrolledDeviceCount: number;
  deviceOperatingSystemSummary?: DeviceOperatingSystemSummary;
  deviceExchangeAccessStateSummary?: DeviceExchangeAccessStateSummary;
  //#endregion
}