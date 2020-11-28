import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceEnrollmentFailureReason } from './deviceenrollmentfailurereason.enum';
//#endregion

export const DeviceEnrollmentFailureReasonConfig = {
  name: "deviceEnrollmentFailureReason",
  members: DeviceEnrollmentFailureReason
} as EnumTypeConfig<DeviceEnrollmentFailureReason>;